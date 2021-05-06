//	(function(){

	/* cssession id created after successful login. */
	ingrs.auth.cssessionid = null;

	/* clientId of the participant after successful login. */
	ingrs.auth.selectedClient = null;
	
	/* contact no of client */
	ingrs.auth.clientInformationLine = null;

	/* Client timeout in Mins */
	ingrs.auth.timeoutInMin = 15;
	
	/* records time when user pauses the app*/
	ingrs.auth.pauseTime = null;
	
	ingrs.auth.homeResponse = null;
	
	ingrs.auth.invalidCounter = 0;
	
	ingrs.auth.myvoyauser = false;
	
	ingrs.auth.myvoyaLogoutUrl = null;
	
	// This Variable is to handle Orientation Issue on iOS
	ingrs.auth.cOrientation = undefined;
	
	ingrs.auth.createLoginWindow = function() {
		var navGroup,prefWindow,loginWindow;
			 var scrollView = Titanium.UI.createScrollView({
		    contentWidth:'auto',
		    contentHeight:'auto',
		    top:0,
		    showVerticalScrollIndicator:true,
		    showHorizontalScrollIndicator:true,
		    layout:'vertical'
		});
		
		if(ingrs.isIphone()) {

			loginWindow= ingrs.ga.createGAEnabledWindow({
				title:L('Label_Back_Button'),
				backgroundColor:'#E7E7E7',
				exitOnClose : true,
				navBarHidden: true,
				gaActivity : 'Login',
				top:15
			});
			
			navGroup = Ti.UI.iOS.createNavigationWindow({
				window:loginWindow
			});
			
			navGroup.resetWindow = resetLogin;
			
			loginWindow.add(scrollView);
			
		} else if(ingrs.isAndroid()) {
		var loginWindow = ingrs.ga.createGAEnabledWindow({
				  title:'Login',
				  exitOnClose : true,
		  		  backgroundColor:'#E7E7E7',
		  		  gaActivity : 'Login'
			});
			
			loginWindow.resetWindow = resetLogin;
			loginWindow.add(scrollView);
		}
	
		/* label ends*/
		var loginHeader = ingrs.auth.ui.createLoginHeader();
		
		loginHeader.addEventListener('click',function(){
			ingrs.auth.blurFields();
		});
		
		scrollView.add(loginHeader);
		
		/* preference starts */
		
			/* create table view */
			var loginPrefView = ingrs.auth.ui.createCustomTableView({top:15,height:132});
			
			var prefRow = ingrs.auth.ui.createCustomRowView({_showEndLine:true});
			
			var prefRowL1 = ingrs.auth.ui.createLabel({left:'3.1%',text:L('Login_Title'),color:'#363636'});
			
			var prefRowL2 = ingrs.auth.ui.createPrefLabel('Username');
			
			prefRowL2.serverId = 'UNAME';
			
			var prefArrow = Ti.UI.createView({
				width:9,
				height:13,
				backgroundImage:'/images/arrows/arrow_table_cell.png',
				anchorPoint:{y:0.5},
				right:'4%'
			});
			
			prefRow.add(prefRowL1);
			prefRow.add(prefRowL2);
			prefRow.add(prefArrow);
			
			prefRow.addEventListener('click',function(){
				userTypeValue.blur();
				passwdValue.blur();
				/* to update pref values when its changed */
				function updatePref(param){
					prefRowL2.text = param.loginDisplay;
					userTypeValue.hintText = param.loginDisplay;
					userTypeValue.keyboardType = param.keyboard;
					prefRowL2.serverId = param.serverValue;
					userTypeValue.passwordMask = param.mask;
					userTypeValue.value='';
					//userTypeMask.text = '';
					passwdValue.value='';
					userTypeView.children[1].text = 'SHOW';
					passwdView.children[1].text = 'SHOW';						
					passwdValue.passwordMask = true;			
					/* removing the toolbar if the login type is Username */
					if(param.loginDisplay === 'Username'){
						userTypeValue.keyboardToolbar = null;
						userTypeValue.keyboardToolbarColor = null;
						userTypeValue.keyboardToolbarHeight = null;
						passwdValue.hintText = 'Password';
					}else{
						userTypeValue.keyboardToolbar = param.keyboardToolbar;
						userTypeValue.keyboardToolbarColor = param.keyboardToolbarColor;
						userTypeValue.keyboardToolbarHeight = param.keyboardToolbarHeight;
						passwdValue.hintText = 'PIN';
					}
					if (prefRowL2.serverId==='SSN') {
						if(ingrs.isAndroid()) {
							rememberSwitch.value = false;
						}else{
							rememberSwitch.value = 0;
						}
						rememberSwitch.enabled = false;
					} else {
						rememberSwitch.enabled = true;
					}
				}
				
				if(ingrs.isAndroid()){
					ingrs.auth.loginPref.createWindow({'currentPref':prefRowL2.text,'updatePref':updatePref}).open();
				} else {
					
					//fn to close nav group from the login pref window
					function closePrefWindow(){
						navGroup.closeWindow(prefWindow);
					};
					
					/*On iOS Navigation group is specifically used to get the Back Button with 'Bezel Border'*/
					prefWindow=ingrs.auth.loginPref.createWindow({'currentPref':prefRowL2.text,'updatePref':updatePref,
						'closePrefWinFn':closePrefWindow});
						
					navGroup.openWindow(prefWindow, {animated:true});
					
				}
				
			});
			
			ingrs.auth.ui.done.addEventListener('click',function(e){
				userTypeValue.blur();
			});
			
			loginPrefView.add(prefRow);
		
		/* preference ends */
		
		/* ssn / passwd starts */
		
		
			/* ssn starts */
			var userTypeRow = ingrs.auth.ui.createCustomRowView({_showEndLine:true});
			
			var userTypeValue = ingrs.auth.ui.createtextField({keyboard:Ti.UI.KEYBOARD_TYPE_DEFAULT,password:true,hintText:'Username'});
			//var userTypeMask = ingrs.auth.ui.createMaskLabel();
			
			userTypeValue.addEventListener('return',function(){
				userTypeValue.blur();
			});
			/*userTypeValue.addEventListener('change',function(e) {
				Ti.API.info('User Id changed:'+e.source.value);
				if (prefRowL2.serverId==='SSN') return;
				
				var tmp = e.source.value;
				if (tmp.length>4) {
					tmp = tmp.substring(0,4);
				}
				userTypeMask.text = tmp;
			})*/;

			var userTypeView = ingrs.auth.ui.createHideShowView(userTypeValue);
			userTypeRow.add(userTypeView);
			userTypeRow.add(userTypeValue);
			//userTypeRow.add(userTypeMask);
			
			//take this listener function out since it makes keyboard disappear for Android.
			//userTypeRow.addEventListener('click',function(){
			//	userTypeValue.focus();
			//});
			loginPrefView.add(userTypeRow);
		
			/* ssn ends */
			
			/* passwd starts */
			var passwdRow = ingrs.auth.ui.createCustomRowView({_showEndLine:false});
			
			var passwdValue = ingrs.auth.ui.createtextField({keyboard:Ti.UI.KEYBOARD_TYPE_ASCII,password:true,hintText:'Password'});
			
			passwdValue.addEventListener('return',function(){
				passwdValue.blur();
			});
			
			var passwdView = ingrs.auth.ui.createHideShowView(passwdValue);
			passwdRow.add(passwdView);
		
			loginPrefView.add(passwdRow);
			/* passwd ends */
		/* ssn / passwd ends */
			
		scrollView.add(loginPrefView);
		
		
		/* remember Id starts*/
		
		var rememberView = ingrs.auth.ui.createCustomTableView({top:19,height:44});
		
		var rememberRow =ingrs.auth.ui.createCustomRowView({_showEndLine:false});
			
			var rememberLabel = ingrs.auth.ui.createLabel({left:'3.1%',text:'Remember Me',color:'#363636'});
			
			var rememberSwitch = Ti.UI.createSwitch({
				style:ingrs.isAndroid()?Titanium.UI.Android.SWITCH_STYLE_CHECKBOX:'',
				right:'3.1%',
				height:44,
				value:true
			});
			if(ingrs.isAndroid()){
				rememberSwitch.borderWidth = '2px';
				rememberSwitch.borderColor  = 'gray';
				rememberSwitch.height = 'auto';
				rememberSwitch.width = 'auto';
			}
			rememberRow.add(rememberLabel);
			rememberRow.add(rememberSwitch);
		
			rememberView.add(rememberRow);
			
			//Fingerprint Authentication - START
			if(ingrs.hasFingerprintSupport){
				
				
				rememberView.height = 88;
				var touchIDRow =ingrs.auth.ui.createCustomRowView({_showEndLine:false});
				
				//var touchIDLabel = ingrs.auth.ui.createLabel({left:'3.1%',text:'Touch ID',color:'#363636'});
				var touchIDLabel = ingrs.auth.ui.createLabel({left:'3.1%',text:'Enable Touch/Face ID',color:'#363636'});
				
				var touchIDSwitch = Ti.UI.createSwitch({
					style:ingrs.isAndroid()?Titanium.UI.Android.SWITCH_STYLE_CHECKBOX:'',
					right:'3.1%',
					height:44,
					value:ingrs.touchIDEnabled
				});
				
				//0920 biometric change turn on for Android
				if(ingrs.isAndroid()){
					touchIDSwitch.borderWidth = '2px';
					touchIDSwitch.borderColor  = 'gray';
					touchIDSwitch.height = 'auto';
					touchIDSwitch.width = 'auto';
					touchIDSwitch.value = ingrs.touchIDEnabled;
				}//end
				
				touchIDSwitch.addEventListener('change',function(e){
					ingrs.touchIDEnabled = touchIDSwitch.value;
	  				if(!ingrs.touchIDEnabled){
						if(ingrs.hasKeyChainItem){
							ingrs.keychainItem.reset();//TODO (TiSDKUpgrade) - ti.identity
						}
	  					Titanium.App.Properties.setBool("touchIDEnabled", ingrs.touchIDEnabled);
	  				}
				}); 
				touchIDRow.add(touchIDLabel);
				touchIDRow.add(touchIDSwitch);
				rememberView.add(touchIDRow);
			}
			
			//Fingerprint Authentication - END
			
			scrollView.add(rememberView);
			
			
			
		/* remember ends starts*/
		
		 function resetLogin() {
			ingrs.auth.cssessionid = null;
			ingrs.auth.timeoutInMin = 15;
			passwdValue.value = '';
			userTypeValue.value = '';
			//userTypeMask.text = '';
			prefRowL2.text = 'Username';
			prefRowL2.serverId = 'UNAME';
			userTypeValue.hintText = 'Username';
			rememberSwitch.enabled = true;
			rememberSwitch.value = true;
			userTypeValue.keyboardToolbar = null;
			userTypeValue.keyboardToolbarColor = null;
			userTypeValue.keyboardToolbarHeight = null;
			userTypeValue.keyboardType = Ti.UI.KEYBOARD_TYPE_DEFAULT;
			ingrs.auth.loginPref.populateSavedPref(prefRowL2,userTypeValue,rememberSwitch,passwdValue,userTypeView,passwdView);
			ingrs.auth.myvoyauser = false;
			ingrs.auth.myvoyaLogoutUrl = null;
			focusField();				
		};
		//populate saved preferences
		ingrs.auth.loginPref.populateSavedPref(prefRowL2,userTypeValue,rememberSwitch,passwdValue,userTypeView,passwdView);
		
		/* login button starts*/
		var loginBtn = ingrs.auth.ui.createLoginBtn();
		
		loginBtn.addEventListener('click',function(){
			ingrs.auth.blurFields();

			//CLEAR HTTP(S) AND WEBVIEW COOKIE BEFORE LOGIN -- START
			Titanium.Network.removeAllHTTPCookies();
			if (ingrs.isAndroid()) {
				Titanium.Network.removeAllSystemCookies();
			}
			//CLEAR HTTP(S) AND WEBVIEW COOKIE BEFORE LOGIN -- END

			if(validateFields()){
				ingrs.auth.loginPref.storeLoginPref({isSavePref:rememberSwitch.value,loginType:prefRowL2.text,value:userTypeValue.value});
				var data = {
						participantId: userTypeValue.value,
						pin: passwdValue.value,
						useridtype:prefRowL2.serverId
					};
				
				passwdValue.value = '';
				if(prefRowL2.serverId === 'SSN'){
					userTypeValue.value = '';
				}
				ingrs.auth.authenticateUser({data:data});
			}
		});
		
		scrollView.add(loginBtn);
		/* login button ends*/
		
		//202107 add Register Now text and btn
		/*
		var firstTimeUserLabel = Titanium.UI.createLabel({
			top : '7%',
			left : '4%',
			text : 'First time user?',
			color : '#363636',
			font : {
				fontSize : 17,
				fontWeight : 'bold',
				fontFamily : 'Helvetica Neue'
			}	
		});
		
		scrollView.add(firstTimeUserLabel);
				
		var registerNowBtn = ingrs.auth.ui.createRegisterNowBtn();//202107
		
		registerNowBtn.addEventListener('click',function(){ 
			var webview = Ti.UI.createWebView({ 
 				url: 'https://my3.intg.voya.com/voyassoui/index.html?domain=voyaretirement.intg.voya.com#/registration', 
 				ignoreError:false  
 			}); 
 
 			var webvieWindow = ingrs.auth.createWebviewWrapperWindow({webview:webview,cancel:'closeWin',title:'Registration'}); 
 			webview.addEventListener('beforeload',function(e){ 
 				ingrs.log.info('registrationFlowWebView() :: beforeLoad' + e.url); 
 				//Check if the url is '/myvoya/logon', if it is then it should go to '/mobile/preauth'. 
 				//Look at line 1115. 
 			}); 
 
 			webview.addEventListener('load',function(e){ 
 				//alert(ingrs.net.domain + '/voyassoui/index.html?domain=' + ingrs.app.domain + '#/registration');				 
 			}); 
 
 			webvieWindow.open(); 
 		}); 
						
		scrollView.add(registerNowBtn);
		*/
		//end 202107 add Register Now text and btn
		
		scrollView.add(ingrs.auth.ui.createFooterlabel1());
		
		
		scrollView.add(ingrs.auth.ui.createFooterlabel2());
		
		ingrs.auth.blurFields = function() {
			if (ingrs.isIphone()){
				userTypeValue.blur();
				passwdValue.blur();
			}
		};
		
		/* call that validates the user input*/
		function validateFields(){
			
			//Fingerprint Authentication - START
			//Keep User Info in Local variable
			//REST WEBSEAL CHANGES
			//if(ingrs.touchIDEnabled ){
				ingrs.uName = userTypeValue.value;
				ingrs.pWord = passwdValue.value;
				ingrs.loginType = prefRowL2.text;
			//}
			//Fingerprint Authentication - END
			
			return ingrs.auth.validate.validateLoginInput({_loginType:prefRowL2.text,_userId:userTypeValue.value,_password:passwdValue.value});
		}
		ingrs.auth.onAuthenticationSuccess = function(userData){
			userTypeValue.value = userData[1];
			passwdValue.value = userData[2];
			prefRowL2.text = userData[0];

			if (prefRowL2.text == "UserName") {
				prefRowL2.serverId = "UNAME";
			} else if (prefRowL2.text == "SSN") {
				prefRowL2.serverId = "SSN";
			} else if (prefRowL2.text == "Employee ID") {
				prefRowL2.serverId = "EID";
			}
			//send an event if the user is trying to login with touchid
			ingrs.ga.trackEvent('TouchId', 'LOGIN', 'SUBMIT', 1);

			loginBtn.fireEvent('click');
		}
		loginWindow.addEventListener('open',function(){
			focusField();
			//Fingerprint Authentication - START //TODO (TiSDKUpgrade) - ti.identity
			//If Touch ID is already enabled and user information saved in KeyChain then show FingerPrint authentication dialog
			var userData = [] ;
			ingrs.readKeyChDataFrmLoginPg = false;
			if(Titanium.App.Properties.getBool("touchIDEnabled") && ingrs.hasKeyChainItem){
				// TODO: Check if we should move this code below - read after valid touch ID authentication
				try{
					ingrs.readKeyChDataFrmLoginPg = true;
					ingrs.keychainItem.read();
				}catch(e){
					ingrs.log.error('Login: Error in reading keychainItem :' + JSON.stringify(e));
				}
			}
			//Fingerprint Authentication - END //TODO (TiSDKUpgrade) - ti.identity
		});
	    
		function focusField(){
			if(rememberSwitch.value === true && (userTypeValue.value !== null && userTypeValue.value.trim() !== '') ){
				passwdValue.focus();
			}else{
				userTypeValue.focus();
			}
		}
		
		if(ingrs.isMobileWeb()){ //TODO (TiSDKUpgrade) (SAAMY) CHECK if this is requried ?
			mainWin.resetWindow = resetLogin;
			return mainWin;
		} else if(ingrs.isIphone()) {
			return navGroup;
		}else {
			return loginWindow;
		}
		
	};
	
	/* method that is used to authenticate user*/
	ingrs.auth.authenticateUser = function(params){
		
		//preload the voyasso to speedup the process
		//Ti.App.fireEvent('Voya:preloadVoyaSSO');
		
		ingrs.log.info('login() :: going to authenticate user with params:');
		ingrs.net.init();
		if(!ingrs.isMobileWeb()){//domain shouldn't change for mobileweb
			var domain = params.data.domain;
			if(typeof domain !== 'undefined' && domain !== null && domain.trim !== ''){
				ingrs.net.domain = domain;
			}else{
				ingrs.net.domain = ingrs.app.domain;	
			}
		}
		
		params.data.amazonMarketApp = ingrs.app.isAmazonMarketApp;
		
		ingrs.net.showProgress = false;
		ingrs.net.utils.showActivityIndicator();
				
		ingrs.net.httpCall({url:'/voyasso/ws/ers/public/mobile/login',data:params.data,cb:function(response){
			ingrs.log.info('login() :: received response after login:'+JSON.stringify(response));
			ingrs.auth.myvoyauser = false;
			
			ingrs.net.showProgress = true;
			
			ingrs.auth.myvoyDomain = 'https://'+response.loginResponse.myvoyaDomain;
			ingrs.auth.domain = response.loginResponse.domain;
			ingrs.auth.myvoyaLogoutUrl = response.loginResponse.myvoyaLogoutUrl;
			var authResult = response.loginResponse.authResult;
			ingrs.auth.loginRespStatus = response.loginResponse.status;
			
			if(authResult != 'client_use_voyasso'){
				ingrs.net.utils.hideActivityIndicator();
			}
			ingrs.log.info(authResult+'<---authResult :: Status ---> '+ingrs.auth.loginRespStatus);
			if (authResult === 'login_sucess') {
				ingrs.auth.processSuccessfulResponse(response.loginResponse,false);
				ingrs.auth.checkForcedPages(response);
			} else if(authResult === 'select_client') { //this goes to select client page
				ingrs.auth.createSelectClientWindow({clientList:response.loginResponse.clientList,authData:params.data}).open();
			} else if(authResult === 'input_ssn') { // this goes to SSN input page
				ingrs.auth.createinputSSNWindow({authData:params.data}).open();
			}else if(authResult === 'client_redirect'){
				ingrs.auth.ui.createRedirectLoginDialog({message:response.loginResponse.authMessage,invokeFn:null}).show();
			}else if(authResult === 'client_disabled'){
				ingrs.auth.ui.createClientDisabledDialog().show();
			}else if(authResult === 'domain_locked'){
				ingrs.auth.ui.createDomainDisabledDialog(response.loginResponse).show();
			}else if(authResult === 'domain_redirect'){ //client domain is in diff DC. do another auth call with the right domain.
				params.data.domain = response.loginResponse.domain;
				params.data.clientid = response.loginResponse.clientId;
				params.data.redirectRequest = true;
				ingrs.auth.authenticateUser(params);
			}else if(authResult === 'login_username'){
				var dialog = ingrs.UI.errorAlertDialog({title:'',message:L('error_login_username_msg')}); 
				dialog.show();
			}else if(authResult === 'client_use_voyasso'){
				//If user not convereted to new SSO flow then take user to old Webview flow for CONVERSION 
				if(ingrs.auth.loginRespStatus == 'part_not_converted'){
					handleVoyassoConversionFlow({authParams:params.data,response:response.loginResponse});	
				}else{
					 //New flow for OTP REST FLOW 
					 //ingrs.log.info();
					 ingrs.log.info("'handleVoyassoFlow NG");
					handleVoyassoFlow({authParams:params.data,response:response.loginResponse});
				}
			}else if(authResult === 'pending_setup'){
				var dialog = ingrs.UI.errorAlertDialog({title:'',message:L('error_pending_setup_msg')}); 
				dialog.show();
			} else {
				ingrs.auth.invalidCounter++; 
				
				//display the cc #
				if((ingrs.auth.invalidCounter > 2 || 'locked' === ingrs.auth.loginRespStatus) && response.loginResponse.informationLine !== null){
						var phone = response.loginResponse.informationLine;
						if(voya.retire.clientCallCenterNumber !== undefined){
							phone = voya.retire.clientCallCenterNumber;
						}
						var message = L('Alert_Invalid_Login_NewMessage') + phone;
						ingrs.auth.ui.createNewInvalidLoginDialog({msg:message});
						//ingrs.auth.ui.createInvalidLoginDialog({invokeFn:null,msg:msg}).show();
				}else{
					
					//Fingerprint Authentication - START
					// Alert user for invalid Credentials when using TouchID, Credentials may have changed afer last login
					if(Titanium.App.Properties.getBool("touchIDEnabled")){
						alert('Credentials may have changed after your last sign-in. Touch ID is temporarily off. Please sign in with your Online ID and Password to reactivate Touch ID. ');
						Titanium.App.Properties.getBool("touchIDEnabled",false);
						//Clear Keychain since user info saved in keychain is invalid.
						if(ingrs.hasKeyChainItem){
							ingrs.keychainItem.reset();//TODO (TiSDKUpgrade) - ti.identity
						}
					}else{
						ingrs.auth.ui.createInvalidLoginDialog({invokeFn:null}).show();
					}
					//Fingerprint Authentication - END
					
					
				}
				
			}
		},ecb : function(error) {
			ingrs.net.utils.hideActivityIndicator();
		 	ingrs.log.info("login() :: mlogin ERROR Callback" + JSON.stringify(error));
		}});
	};
	
	ingrs.auth.processSuccessfulResponse = function(_response,conversionFlow){
		ingrs.auth.invalidCounter = 0;
		ingrs.auth.cssessionid = _response.cssessionId;
		ingrs.auth.selectedClient = _response.clientId;
		ingrs.auth.personId = _response.personId || ""; //the || "" can be removed once personId is being returned from the service

		//set the apm with the user's cssession
		apm && apm.setUsername(_response.cssessionId);
		ingrs.ga.setUser(ingrs.auth.personId);
		ingrs.ga.setCustomDimension(2,'ClientID',ingrs.auth.selectedClient);
		ingrs.ga.setCustomDimension(4,'SessionId',_response.cssessionId);
		
		if(!ingrs.isMobileWeb() && typeof _response.domain !== 'undefined' && _response.domain !== null && _response.domain.trim !== ''){
			ingrs.net.domain = _response.domain;
		}
		if(typeof _response.timeoutInMin !== 'undefined' && _response.timeoutInMin !== null){
			ingrs.auth.timeoutInMin =  _response.timeoutInMin;
		}
		
		ingrs.auth.deviceRegistered = _response.deviceRegistered;
		ingrs.auth.clientInformationLine = _response.informationLine;
		
		//Fingerprint Authentication - START
		if(ingrs.touchIDEnabled && !conversionFlow){
			ingrs.keychainItem.saveData([ingrs.loginType,ingrs.uName, ingrs.pWord]);//TODO (TiSDKUpgrade) - ti.identity
			Titanium.App.Properties.setBool("touchIDEnabled", ingrs.touchIDEnabled);
		}
		//Fingerprint Authentication - END
			
	};
	
	ingrs.auth.checkForcedPages = function(_response) {
		var forcedPage = _response.forcePage;
		
		ingrs.log.info('login() ::checkForcedPages:'+ingrs.auth.cssessionid + ' | '+forcedPage);
		
		if (forcedPage === 'mfa_challenge' || forcedPage === 'mfa_enrollment' || forcedPage === 'username_reset') {
			ingrs.log.info('login() ::opening enhanced login window:'+ingrs.auth.cssessionid);
			ingrs.auth.createEnhancedLoginWindow({status:forcedPage}).open();
		}else if(forcedPage === 'change_password'){
			ingrs.log.info('login() ::opening change Password window:'+ingrs.auth.cssessionid);
			ingrs.auth.createChangePwdWindow(_response).open();
		}else if(forcedPage === 'set_username' || forcedPage === 'reset_username'){
			ingrs.log.info('login() ::opening setUsername window:'+ingrs.auth.cssessionid);
			ingrs.auth.createSetUsernameWindow(_response).open();
		}else if(forcedPage === 'sso_security'){
			ingrs.log.info('login() ::opening setSecurity window:'+ingrs.auth.cssessionid);
			ingrs.auth.createSetSecurityWindow(_response).open();
		}else{
			var restrictedTrader = _response.restrictedTrader;
			//show error message for restricted traders and logout
			if(typeof restrictedTrader !== 'undefined' && restrictedTrader !== null && restrictedTrader){
				var message = String.format(L('Restricted_Trader_Txt'), ingrs.auth.clientInformationLine);
				ingrs.auth.ui.createRedirectLoginDialog({message:message,invokeFn:ingrs.auth.loginLogout}).show();
			}else{
				//check whether should be forced for edelivery notification
				if(isShowENotification(_response)){
					ingrs.log.info('login() ::opening Edelivery notification:'+ingrs.auth.cssessionid);
					ingrs.auth.createEnhancedLoginWindow({status:'edelivery',response:_response}).open();
				}else{
					//ingrs.log.info('login() ::opening accntSummary window:'+ingrs.auth.cssessionid);
					//ingrs.auth.createAcntSummaryWin(_response).open();
					ingrs.auth.showAccountSummary(_response);
				}
			}
		}
	};
	
	//check whether Edelivery notification should be shown
	function isShowENotification(_param){
		if(_param.edeliveryFlag){
			//check whether the user already see this message on this device.
			try {
				var storedPref = Ti.App.Properties.getString('EDELIVERY_NOTIFICATION');
				ingrs.log.info('login() :EDELIVERY_NOTIFICATION :'+storedPref);
				if (storedPref === 'true') {
					return false;
				}else{
					return true;
				}
			}catch(e) {
				Ti.API.error('EDELIVERY_NOTIFICATION removed - ' + e);
				Ti.App.Properties.removeProperty('EDELIVERY_NOTIFICATION');
			}
			
		}else{
			return false;
		}
	}
	ingrs.auth.loginLogout = function() {
		ingrs.auth.endUserSession();
		ingrs.UI.logout();
	};
	ingrs.auth.endUserSession = function() {
		ingrs.net.httpCall({
			url : '/eportal/mobile/logout.action',
			cb : function(response) {},
			ecb : function(error) {},
			seh : function(error) {}
		});
		ingrs.log.info('ingrs.auth.myvoyauser='+ingrs.auth.myvoyauser+" ingrs.auth.loginRespStatus=  "+ingrs.auth.loginRespStatus );
		//logout myvoya session if any
        if(ingrs.auth.myvoyauser){
			//Existing Webview flow logout
        	if(ingrs.auth.loginRespStatus === 'part_not_converted'){
        		ingrs.log.info('endUserSession() :: going to logout myvoya session');
            	var webview = Titanium.UI.createWebView({url:ingrs.auth.myvoyaLogoutUrl,ignoreSslError :true});
        
	            var window = Titanium.UI.createWindow({
	            	theme	: "Theme.NoActionBarTransWindow",
					backgroundColor : 'transparent'
	            });
	            window.add(webview);
	            webview.zIndex= -1;
	            webview.visible= false;
	           
	            webview.addEventListener('beforeload',function(e){
	                ingrs.log.info('endUserSession() :: beforeLoad' + e.url);
	            });
	
	            webview.addEventListener('load',function(e){
	                ingrs.log.info('endUserSession() :: loggedOut myvoya');
	            });
	            
	            window.open();
	            
	            function closeLogoutWindow(){
	                ingrs.log.info('endUserSession() :: loggedOut myvoya and window webview closed');
	                window.close();
	            }
	            _.delay(closeLogoutWindow, 5000);
	            
			}else{
				//NEW REST API flow logout
				//TODO: Right now this logout call returning HTMNL data as response. Ask Kenn to send {'result': 'succsss'}
				var initVoyaSSOCall = {
					data : null,
					url : ingrs.auth.myvoyaLogoutUrl,
					method : 'GET',
					headerNameValueList : [["Content-Type", "application/json"], ["X-Requested-By", "VOYASSO-UI"]],
					ecb : ingrs.auth.voyaSSOErrorCallback,
					scb : function(error) {}
				};
				ingrs.auth.httpCallVoyaSSO(initVoyaSSOCall);
           }
        }
	};
	
	ingrs.auth.pingUserSession = function() {
		if(ingrs.auth.cssessionid !== null){
			ingrs.net.httpCall({
				url : '/eportal/mobile/checkSession.action',
				cb : function(response) {},
				ecb : function(error) {}
			});
		};
	};
	
	//listener called by all forced page after confirmation
	ingrs.auth.continueForceCheck =  function(_param){
		
		var forcePage = _param.forcePage;
		ingrs.log.info('login() ::continueForceCheck event Fired for :'+ingrs.auth.cssessionid + ' | data :'+ forcePage);
	
		var url;
		if(forcePage === 'mfa_enrollment'){
			url = '/eportal/mobile/checkLoginPreference.action';
		}else if(forcePage === 'set_username'){
			url = '/eportal/mobile/checkSSOSecQues.action';
		}else if(forcePage === 'reset_username'){
			url = '/eportal/mobile/checkChangePin.action';
		}else if(forcePage === 'change_password'){
			url = '/eportal/mobile/checkUserLoginPref.action';
		}else if(forcePage === 'sso_security'){
			url = '/eportal/mobile/home.action';
		}
		ingrs.net.httpCall({
			url : url,
			cb : function(response){
				ingrs.auth.checkForcedPages(response);
			}
		});
	};

	ingrs.auth.showAccountSummary = function(_response) {

		ingrs.auth.homeResponse = _response;
		
		ingrs.log.info('login() ::in showAccountSummary function:' + ingrs.auth.cssessionid);
		ingrs.log.info('Orange Money Flag::' +_response.showOrangeMoney+"Orange money Token::"+_response.orangemoneytoken);
		if(_response.showOrangeMoney==='true' && _response.orangemoneytoken!==null){
			ingrs.om.showOrangeMoney();
		} else {
			ingrs.log.info('login() ::opening accntSummary window::has Orange Money disabled'+ingrs.auth.cssessionid);
			//Pass orange money response as null as it's not enabled for this participant'
			ingrs.auth.createAcntSummaryWin(_response, null,false).open();
		}
	};

// ***********************************************initSession************************************************
doInitVoyasso = function() {
	
	ingrs.log.info(ingrs.auth.domain+'Inside ingrs.auth.initVoyasso()');
	ingrs.log.info(ingrs.auth.domain+'Inside ingrs.auth.initVoyasso()');
	var initVoyaSSOCall = {
		data : {
			"appId" : "PWEB",
			"domain" : ingrs.auth.domain, 
			"page" : "",
			"sourceAppId" : "",
			"target" : "",
			"theme" : "MOBILE"
		},
		url : ingrs.auth.myvoyDomain +'/voyasso/ws/ers/public/initSession',
		method : 'POST',
		headerNameValueList : [["Content-Type", "application/json"], ["X-Requested-By", "VOYASSO-UI"]],
		ecb : ingrs.auth.voyaSSOErrorCallback,
		scb : doInitMGP
	};
	ingrs.log.info('First doInitVoyasso'+initVoyaSSOCall);
	//ingrs.log.info(ingrs.auth.domain+'Inside ingrs.auth.initVoyasso()');
	ingrs.auth.httpCallVoyaSSO(initVoyaSSOCall);
};

// ***********************************************mga/sps/ac/js/info.js**********************************
doInitMGP = function(_params) {
	ingrs.log.info('Inside ingrs.auth.initMGP()');
	ingrs.log.info('Inside ingrs.auth.initMGP()');
	var initMGPCall = {
		data : null,
		url : ingrs.auth.myvoyDomain +'/mga/sps/ac/js/info.js',
		method : 'GET',
		headerNameValueList : [["Content-Type", "application/json"]],
		ecb : ingrs.auth.voyaSSOErrorCallback,
		scb : doInitMGPAttriCol
	};
	ingrs.log.info('First doInitVoyasso'+initMGPCall);
	ingrs.log.info(initMGPCall.url);
	ingrs.log.info(initMGPCall.headerNameValueList);
	ingrs.log.info(initMGPCall.headerNameValueList);
	ingrs.auth.httpCallVoyaSSO(initMGPCall);

};

// *********************************************** Attri. Collection **************************************
doInitMGPAttriCol = function(_params) {
	ingrs.log.info('Inside doInitMGPAttriCol()');
	ingrs.log.info('Inside doInitMGPAttriCol()');
	var timestamp = Math.round(new Date().getTime() / 1000);
	var initAttriCollCall = {
		data : {
			"timestamp" : timestamp,
			"screenHeight" :Ti.Platform.displayCaps.platformHeight,
			"screenWidth" :  Ti.Platform.displayCaps.platformWidth,
			"colorDepth" : "24",
			"deviceLanguage" : "en-US",
			"browserPlugins" : "none",
			"devicePlatform" : Titanium.Platform.osname,
			"deviceFonts" : Titanium.Platform.id,
			"baseUserAgent" :Titanium.userAgent// "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_3 like Mac OS X; fr-fr) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7E18"
		},
		url : ingrs.auth.myvoyDomain +'/mga/sps/ac',
		method : 'POST',
		headerNameValueList : [["Content-Type", "application/json"], ["X-Requested-By", "VOYASSO-UI"]],
		ecb :  ingrs.auth.voyaSSOErrorCallback,
		scb : doginPrepExec
	};
	ingrs.log.info('Inside doInitMGPAttriCol()');
	ingrs.log.info(initAttriCollCall);
	ingrs.log.info(initAttriCollCall.data);
	ingrs.log.info(initAttriCollCall.url);
	
	ingrs.auth.httpCallVoyaSSO(initAttriCollCall);

};

doginPrepExec = function(_params) {
	ingrs.log.info('loginPrepExec :: acuuid ==> '+JSON.stringify(_params));
	ingrs.log.info('loginPrepExec :: acuuid ==> '+JSON.stringify(_params));
	var initLoainPrepCall = {
		data : {
			"pageData" : {
				"pageId" : "loginPrepare"
			},
			"formData" : {
				 "emailOrUsername" : ingrs.uName, 
				"password" : ingrs.pWord
			}
		},
		url : ingrs.auth.myvoyDomain +'/voyasso/ws/ers/public/loginPrepare/execute',
		method : 'POST',
		headerNameValueList : [["Content-Type", "application/json"], ["X-Requested-By", "VOYASSO-UI"]],
		
		ecb : function(response){
			ingrs.log.info("voyaSSOErrorCallback ==> "+JSON.stringify(response));
			var dialog = ingrs.UI.errorAlertDialog({title:"Invalid Login",message:"Your Login information is incorrect. Please try again."});
			dialog.show();
		},
		scb : makeAuthenticateCall
	};
	ingrs.auth.httpCallVoyaSSO(initLoainPrepCall);
};

// ***********************************************authenticate*************************************************************************

makeAuthenticateCall = function(_params) {
	ingrs.log.info('Inside makeAuthenticateCall');
	ingrs.log.info('Inside makeAuthenticateCall');
	var resp = _params.errors;
	if(resp !== undefined){
		var dialog = ingrs.UI.errorAlertDialog({title:L('Alert_Invalid_Login_Title'),message:L('Alert_Invalid_Login_Message')});
		dialog.show();
		return;
	}
	ingrs.log.info('Making authenticateCall');
	var authenticateVoyaCall = {
		data : null,
		url : ingrs.auth.myvoyDomain +'/voyasso/authenticate',
		method : 'GET',
		headerNameValueList : [["Accept", "application/json"]],
		ecb : ingrs.auth.voyaSSOErrorCallback,
		scb : showOTPScreen
		
	};
	ingrs.log.info(authenticateVoyaCall);
	ingrs.log.info(authenticateVoyaCall.url);
	ingrs.log.info("submitOTP() API Method "+JSON.stringify(authenticateVoyaCall));
	ingrs.log.info("submitOTP() API Method "+JSON.stringify(authenticateVoyaCall.url));
	ingrs.auth.httpCallVoyaSSO(authenticateVoyaCall);
};

// ***********************************************SHOW OTP *************************************************************************
showOTPScreen = function(_params) {
		var mechanism = _params.mechanism;
		ingrs.log.info('	ingrs.auth.showOTP----> ' + mechanism);
		ingrs.log.info('	ingrs.auth.showOTP----> ' + mechanism);
		var hasSuccData = mechanism ? mechanism.indexOf('asf:mechanism:macotp') !== -1 : false;
		if (hasSuccData) {
			ingrs.net.utils.hideActivityIndicator();
			ingrs.log.info("submitOTP()  load::"+JSON.stringify(_params));
			ingrs.auth.createMyVoyaOTPWindow(_params).open();			
		}else{
			ingrs.log.info("eportalLoginSuccess preauth Resp.---> " + _params);
			ingrs.log.info("eportalLoginSuccess preauth Resp.---> " + _params);
			var respData = _params;
			var emailID = respData.emailAddress ? "&emailAddress="+respData.emailAddress : '';
			//var customURL = respData.url.replace('login.action','mobile/preauth.action')+ "?s=" + respData.s + emailID + "&d=" + respData.d;
			var customURL = "https://" + ingrs.net.domain + "/eportal/mobile/preauth.action?s=" + respData.s + emailID + "&d=" + respData.d;
			ingrs.log.info("eportallogon url " + customURL);
			ingrs.log.info("eportallogon url " + customURL);
			ingrs.net.showProgress = false;
			ingrs.net.utils.showActivityIndicator();
			ingrs.net.httpCall({
				url : customURL,
				cb : function(response){
					ingrs.net.showProgress = true;
					ingrs.log.info("preauth call for already registered user: SUCCSESS" + JSON.stringify(response));
					ingrs.auth.processSuccessfulResponse(response.loginResponse, false);
					ingrs.auth.checkForcedPages( response);
					//ingrs.net.utils.hideActivityIndicator();
				},
				ecb : function(response){
					ingrs.net.utils.hideActivityIndicator();
				},
				seh : function(response){
					ingrs.net.utils.hideActivityIndicator();
				},
			});
		}
	
};

var  maintText = {
  "maintText": [{
    "startTime": "00:01",
    "endTime": "8:30",
    "message": "We will be performing required maintenance between 12:01 am to 9 am Eastern Time.  During this time certain functionality may be unavailable.  We apologize for any inconvenience."
  }]
};

ingrs.auth.voyaDisplayStaticText = function(params){
	var input1 = new Date();	
	var input = new Date(input1.getTime());	
	var estDate = input.toLocaleString('en-US',{timeZone: 'America/New_York'});
	var input2 = new Date(estDate);
	ingrs.log.info("date1:"+ input2);

	var sun = input2.getDay();
	ingrs.log.info("date:"+sun);
	var hours = input2.getHours();
	var minutes = input2.getMinutes();
	var seconds = input2.getSeconds();
	ingrs.log.info("text1:"+ params.maintText[0].message);

	var startTimeArry = [];
	var startTime = params.maintText[0].startTime;
	startTimeArry = startTime.split(":");
	var startHour = parseInt(startTimeArry[0]);
	var startMin = parseInt(startTimeArry[1]);
	ingrs.log.info("startTimeHour:"+ startHour);
	ingrs.log.info("startTimeMin:"+ startMin);
	
	var endTimeArry = [];
	var endtTime = params.maintText[0].endTime;
	endTimeArry = endtTime.split(":");
	var endHour = parseInt(endTimeArry[0]);
	var endMin = parseInt(endTimeArry[1]);
	//if(endMin==0)
	endMin=60;
	ingrs.log.info("endTimeHour:"+ endHour);
	ingrs.log.info("endTimeMin:"+ endMin);
	
	if(sun==0 && hours>=startHour && hours <= endHour && minutes >= startMin && minutes <=endMin ) {
		
		var maintMsg = params.maintText[0].message;
		var sundayMsg = ingrs.UI.errorAlertDialog({
								title : '',
								message : maintMsg 
							});
		sundayMsg.show();
	}};

ingrs.auth.voyaGetApacheText = function(params){

    	var xhr = Ti.Network.createHTTPClient();
        xhr.open('GET', 'https://'+ ingrs.net.domain +'/static/global/html/mobile-main.json');  
        xhr.validatesSecureCertificate = false;
        ingrs.log.info("testing url:"+ingrs.net.domain +'/static/global/html/mobile-main.json');
        xhr.onload = function(e){
        var response = xhr.responseText;
		var maintData = JSON.parse(response);
		ingrs.auth.voyaDisplayStaticText(maintData);
        ingrs.log.info("Apache JSON Response ::--->"+JSON.stringify(response));

         };
         xhr.onerror = function(e){
                ingrs.log.info("voyaGetApacheText failed:"+e.error);
                ingrs.auth.voyaDisplayStaticText(maintText);
         };
         xhr.setTimeout(10000); // 10 sec for timeout
         xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
         xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
         xhr.send();
 };

 handleVoyassoFlow = function(_params) {
	ingrs.auth.myvoyauser = true;

	ingrs.log.info("handleVoyassoFlow()  load::"+JSON.stringify(_params));
	//ingrs.net.utils.showActivityIndicator();
	doInitVoyasso();
};

ingrs.auth.voyaSSOErrorCallback = function(errorStr){
	ingrs.net.utils.hideActivityIndicator();
	ingrs.log.info("voyaSSOErrorCallback ==> "+errorStr);
	var dialog = ingrs.UI.errorAlertDialog({title:L('error_system_unavailable_title'),message:L('system_error_text')});
		dialog.show();
};

ingrs.auth.httpCallVoyaSSO = function(_params) {
		var xhr = Ti.Network.createHTTPClient();
		var payload = _params.data;
		xhr.validatesSecureCertificate = false;
		xhr.open(_params.method, _params.url);
		for (var i = 0; i < _params.headerNameValueList.length; i++) {
			xhr.setRequestHeader(_params.headerNameValueList[i][0], _params.headerNameValueList[i][1]);
		};
		xhr.onerror = function(e) {
			ingrs.net.utils.hideActivityIndicator();
			ingrs.log.info(e.code + 'error 1 ' + e.error);
            ingrs.log.info('Login httpCallVoyaSSO failed - networkTypeName:'+ Ti.Network.networkTypeName + 'deviceOnline: '+ Ti.Network.online);
			_params.ecb(e);
		};
		xhr.onload = function(e) {
			var response = this.responseText;
			//ingrs.log.info("Header::--->"+JSON.stringify(xhr.getResponseHeaders('Authorizationeportaljsessionid')));
			ingrs.log.info("RESP ::--->"+JSON.stringify(response));
			try{
				//SKIP JSON PARSING FOR THESE RESPONSE 
				var hasSuccData = _params.url.indexOf('.com/mga/sps/ac') !== -1 || _params.url.indexOf('myvoya/logout') !== -1 || _params.url.indexOf('deviceRegistrationAlert') !== -1;
				ingrs.log.info(_params.url+"JSON PARSING NOT REQUIRED ?  ::--->"+hasSuccData); 
				if(hasSuccData){
					_params.scb(response);	
				}else{
					_params.scb(JSON.parse(response));
				}
			}catch(e){
				ingrs.log.error(" ingrs.auth.httpCallVoyaSSO ERROR Not able to Parse Response: Requesr URL : "+_params.url+": ERROR  : "+e.message);
				ingrs.auth.voyaSSOErrorCallback(e.message);
			}
			
		};
		if (payload === null) {
			xhr.send();
		} else {
			ingrs.log.info('URL ENDPOINT= '+_params.url + '\n Input Object = ' + JSON.stringify(payload));
			
			xhr.send(JSON.stringify(JSON.parse(JSON.stringify( payload))));
		}

	};
handleVoyassoConversionFlow = function(_params){

	ingrs.auth.myvoyauser = true;
	var conversionFlow = false;
	var voyassoAuthUrl = _params.response.domain+'&flow=auto-login#/auto-login/';
	
	var ssoWebview = Titanium.UI.createWebView({url:'/login/voyasso.html',ignoreSslError :true});
	var loadingView = Titanium.UI.createView({backgroundColor:'white',width:'100%',height:'100%'});
	ingrs.auth.myVoyaWindow = ingrs.auth.createWebviewWrapperWindow({webview:ssoWebview,loadingBgView:loadingView});
	var activityView;
	var activityIndicator;

	//CREATING LOADING DIALOG / ACTIVITY INDICATOR
	if (ingrs.isIphone()) {
		var activityIndicator = Titanium.UI
			.createActivityIndicator({
				height : '100%',
				width : '100%',
				message : 'Loading...',
				font : {
					size : 8
				},
				color : 'white',
				style : Titanium.UI.ActivityIndicatorStyle.PLAIN
			});
		activityView = Ti.UI.createView({
			zIndex : 10,
			height : '20%',
			width : '37%',
			borderRadius : 10,
			backgroundColor : 'black'
		});
		activityView.add(activityIndicator);
	} else {
		activityIndicator = Ti.UI.Android.createProgressIndicator({message : 'Loading...',});
	}


	ssoWebview.addEventListener('load',function(e){
		
		ingrs.log.info("handleVoyassoFlow()  load::"+e.url);

		//Logic to hide Loading dialog for Registration flow, maintenance page, and OTA(/mga/) Flow . -START
		//https://my3.intg.voya.com/voyasso/index.html?domain=archdioceseno.intg.voya.com#/maintenance
		if( (e.url.indexOf('index.html') !== -1  && e.url.indexOf('maintenance') !== -1 ) || e.url.indexOf('/mga/') !== -1  || (e.url.indexOf('index.html') !== -1 && e.url.indexOf('auto-login') == -1)){
			ingrs.auth.myVoyaWindow.remove(loadingView);
			if (ingrs.isIphone()) {
				if(ingrs.auth.myVoyaWindow){
					ingrs.auth.myVoyaWindow.remove(activityView);
				}
			}else{
				activityIndicator.hide();
			}
		}
		//Logic to hide Loading dialog for Registration flow, maintenance page, and OTA(/mga/) Flow . -END
		if(e.url.indexOf('voyasso.html') !== -1 ){
			ssoWebview.evalJS('updateCred(\'' + _params.authParams.participantId + '\',\''+_params.authParams.pin + '\',\''+ voyassoAuthUrl + '\',\''+ voya.retire.mobileClientBrand + '\')');
		}
	});

	ssoWebview.addEventListener('beforeload',function(e){
		ingrs.log.info("handleVoyassoFlow()  beforeload::"+e.url);

		if (e.url.indexOf("www.voya.com") !== -1 && !ingrs.stopLoading) {
			ingrs.log.info("handleVoyassoFlow()  call to www.voya.com::"+e.url);
			e.bubble = false;
			//stop the url from loading
			ssoWebview.stopLoading();
			//STOP LOADING WEBVIEW - WORK AROUND TO FIX SDK ISSUE
			ingrs.stopLoading  = true;
			Ti.App.fireEvent('Voya:openURL', { url: e.url});
		}

		//for registration flow, dont enable touchId
		if(e.url.indexOf('index.html') !== -1 && e.url.indexOf('auto-login') == -1){
			conversionFlow = true;
		}

		if((e.url.indexOf('eportal') !== -1 && e.url.indexOf('myvoya') == -1) || e.url.indexOf('logout') !== -1){

			var loadingEportaUrl = e.url;
			//update to the mobile url
			var eportalPreauthUrl = loadingEportaUrl.replace('preauth.do','mobile/preauth.action');
			//call eportal preauth to get home data
			ingrs.net.showProgress = false;
			ingrs.net.httpCall({
				url : eportalPreauthUrl,
				cb : function(response){
					ingrs.net.showProgress = true;
					ingrs.auth.processSuccessfulResponse(response.loginResponse,conversionFlow);
					ingrs.auth.checkForcedPages(response);
				}
			});
			ssoWebview.stopLoading();
		}
	});


	if (ingrs.isIphone()) { // SHOW LOADING DIALOG ON myVoyaWindow - iOS
		ingrs.auth.myVoyaWindow.add(activityView);
	}
	ingrs.auth.myVoyaWindow.open({modal:true});
	activityIndicator.show();	    // SHOW LOADING DIALOG ON myVoyaWindow - Android
};

/*
ingrs.auth.openMadlib = function(){
	ingrs.auth.homeResponse = {"brandHeaderType":"I","challengeResult":null,"edeliveryFlag":false,"employerName":"Other Voya Plans","forcePage":"home","homePageMsg":"test","loginResponse":{"authMessage":null,"authResult":"login_sucess","clientId":"INGWIN","clientList":[],"cssessionId":"KgWX0Vo4boQ06xGQbs9Imw--.I604","deviceRegistered":true,"domain":"ingretirement.intg.ingplans.com","informationLine":null,"timeoutInMin":15},"orangemoneytoken":"s=KgWX0Vo4boQ06xGQbs9Imw--.I604&page=mobile&d=0bc877c354b9b052e57b0fe8d8d8e8aee25ba63c","partName":"HAYWOOD CEPHAS-DP","planBeanList":[{"asOfDate":"DEC 15, 2014","balance":"$86,698.88","planId":"878131","planName":"MCDERMOTT, GIANNINI AND GRAY DENTAL ASSOC., P.C. 401(K) PSP","planType":"SAVINGS"},{"asOfDate":"DEC 15, 2014","balance":"$0.00","planId":"666800","planName":"STATE OF CT DEF COMP 457B PLAN","planType":"SAVINGS"},{"asOfDate":"DEC 15, 2014","balance":"$0.00","planId":"666802","planName":"STATE OF CONNECTICUT 403B PLAN","planType":"SAVINGS"},{"asOfDate":"DEC 15, 2014","balance":"$0.00","planId":"666801","planName":"CONNECTICUT ARP","planType":"SAVINGS"},{"asOfDate":null,"balance":"$324.58","domain":"my.intg.voyaretirementplans.com","planId":"MTc0MTA0NzI0NQ==","planName":"SEDILLO-DP (GH0045)","planType":"INGACCESS","sourceSystem":"ACES"}],"restrictedTrader":false,"showOrangeMoney":"true"};
	ingrs.om.orangeMoneyResponse = {"madLibData":{"annualSalary":0,"dob":"1970-08-23T00:00:00","firstName":"HAYWOOD","firstTimeUser":true,"madLib":true,"madlibHelpContent":"Your current age and annual pay are needed to provide an estimate of your retirement income.","participantStatus":"TERM","skipMadlibAllowed":false}};	
	ingrs.om.createMadlibWindow().open();
};*/
	
//})();
