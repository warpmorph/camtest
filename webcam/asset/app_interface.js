/*
	web에서 app의 기능을 호출하는 web to app(native) 인터페이스.
	아래 17개 method 정의.
	{
		canSubmit,	cancelVoiceRecord,	onPageLoadStart,	onPageLoadDone,
		enableSubmit,	canRecordVoice,	pageEnabled,	playSound,
		stopPlaySound,	recordVoice,	restartContent,	exitContent,
		startVideo,	endVideo,	startCamera,	endCamera,
		webMessage
	}
	window.toKumonApp.pageEnabled 처럼 호출.
*/
window.toKumonApp =
    window.toKumonApp ||
    (() => {
        /**
         * Android OS 연동 API
         * @author 유승빈
         * @since 2023.12.14
         */
        const androidBridge = {
            //bridge for android
            /**
             * app to web함수인 nwCanSubmit 호출에 대한 응답.
             * @description 정교재만 사용. (pgNo에 지정된 페이지가 제출 가능 상태이면 canSubit에 'true', 제출 불가면 'false'로 호출)
             * @param  {String} pgNo 페이지 번호. 1~20 사이의 정수. (20은 향후 변경 가능)
             * @param  {String} canSubmit pgNo해당 페이지가 제출 가능 상태면 'true',아니면 'false'로 호출
             * @param  {String} message 제출 불가 이유 문자열. 현재 항상 빈문자열로 호출
             * @param  {String} data 제출시 서버에 저장할 (통상 json을 문자열화한) 문자열.
             * @return {undefined} undefined
             */
            wnIsCanSubmit(pgNo, canSubmit, message, data) {
                kumonmbr.wnIsCanSubmit(pgNo, canSubmit, message, data);
            },
            /**
             * 진행 중인 녹음 취소 요청.
             * @description 정교재만 사용
             * @param  {String} cbEvalString 녹음 취소 후 앱에서 실행해줄 자바스크립트 코드 문자열. ex) `gCtl.onRecordCancel(7,20)`
             * @return {undefined} undefined
             */
            wnRecordVoiceCancel(cbEvalString) {
                kumonmbr.wnRecordVoiceCancel(cbEvalString);
            },
            /**
             * 콘텐츠 페이지가 로딩 시작될 때 호출.
             * @description 정교재만 사용. (nwStartLoadPage 및 nwMovePage에 대한 응답. 콘텐츠는 이 함수 호출 후 로딩 완료시 onPageLoadDone 호출함)
             * @param  {String} pgNo 로드되는 페이지 번호. 1~20 사이의 정수. (20은 향후 변경 가능)
             * @return {undefined} undefined
             */
            wnStartLoadPage(pgNo) {
                kumonmbr.wnStartLoadPage(pgNo);
            },
            /**
             * 콘텐츠 페이지 로딩 완료시(e.g. 콘텐츠 내 이미지 모두 표시됨) 호출.
             * @description 정교재만 사용.
             * @param  {String} pgNo 로드되는 페이지 번호. 1~20 사이의 정수. (20은 향후 변경 가능)
             * @return {undefined} undefined
             */
            wnPageLoadFinish(pgNo) {
                kumonmbr.wnPageLoadFinish(pgNo);
            },
            /**
             * 제출/완료 버튼 활성화/비활성화 요청.
             * @description 정교재만 사용. (사용자가 페이지 학습을 제출 가능한 상태까지 진행한 경우 호출. 이 함수 호출 결과로 앱은 app to web 함수인 nwIsCompleted 호출해야 함)
             * @param  {String} bEnable 'true'이면 제출 버튼 활성화. 현재 항상 'true'로 호출
             * @param  {String} data 서버에 저장할 (통상 json을 문자열화한) 문자열. 저장할 자료가 없을 경우 빈문자열
             * @return {undefined} undefined
             */
            wnEnableSubmit(bEnable, data) {
                kumonmbr.wnEnableSubmit(bEnable, data);
            },
            /**
             * native가 녹음을 시작할 수 없는 시점이 있어서 만든 녹음 가능 여부 조회 함수.
             * @description 정교재만 사용. (앱은 이 함수 호출 결과로 app to web 함수인 nwIsRecordVoiceCheck 호출해야 함)
             * @param {undefined} undefined
             * @return {undefined} undefined
             */
            wnRecordVoiceCheck() {
                kumonmbr.wnRecordVoiceCheck();
            },
            /**
             * 콘텐츠가 풀이 가능 상태가 되었을 경우 호출.
             * @description nwStartStudy 에 대한 응답. 정교재, 나무시리즈 콘텐츠만 사용.
             * @param {String} data 앱에 전달할 문자열. 정교재인 경우 페이지 번호. 나무시리즈는 콘텐츠 코드.
             */
            wnPageEnabled(data) {
                kumonmbr.wnPageEnabled(data);
            },

            /**
             * 앱이 녹음한 음원을 재생 요청. 정교재,나무시리즈에서 사용.
             * @description 정교재,나무시리즈에서 사용.
             * @param  {String} filePath 재생할 file 경로
             * @param {String} cbEvalString 음원 재생 완료 후 엡에서 실행해줘야할 자바스크립트 코드 문자열. ex) `gCtl.onPlayRecordDone(5,9)`
             */
            wnPlaySound(filePath, cbEvalString) {
                kumonmbr.wnPlaySound(filePath, cbEvalString);
            },

            /**
             * 녹음 음원 재생 취소 요청.
             * @description 정교재,나무시리즈에서 사용.
             * @param  {String} filePath 재생 취소할 음원 경로
             * @param {String} cbEvalString 음원 재생 취소 후 엡에서 실행해줘야할 자바스크립트 코드 문자열. ex) `gCtl.onCancelPlayRecord(5,9)`
             */
            wnStopPlaySound(filePath, cbEvalString) {
                kumonmbr.wnStopPlaySound(filePath, cbEvalString);
            },

            /**
             * duration 초 동안 녹음 요청.
             * @description 정교재,나무시리즈에서 사용
             * @param  {String} duration 녹음 해야하는 초단위 시간. 문자열임.
             * @param {String} cbEvalString 녹음 완료 후 엡에서 실행해줘야할 자바스크립트 코드 문자열.
             * @todo 확인 필요: 현재 returnFunctionName 대신 nwIsRecordVoiceStart함수가 호출되어 호출시 cbEvalString을 ''로 주고 있음.
             */
            wnRecordVoice(duration, cbEvalString) {
                kumonmbr.wnRecordVoice(duration, cbEvalString);
            },

            /**
             * 콘텐츠 재시작 요청.
             * @description 나무시리즈 콘텐츠만 사용.
             * @param  {String} data 앱에 전달할 인수. 현재 항상 빈문자열.
             */
            wnReplay(data) {
                kumonmbr.wnReplay(data);
            },
            /**
             * 콘텐츠 종료 요청.
             * @description 나무시리즈 콘텐츠만 사용.
             * @param {undefined} undefined
             */
            wnContentExit() {
                kumonmbr.wnContentExit();
            },
            /**
             * 동영상 시작 요청.
             * @description 나무시리즈에서 정의. (현재 사용안함)
             * @param  {String} data 앱에 전달할 인수. 현재 항상 빈문자열.
             */
            wnStartVideo(data) {
                kumonmbr.wnStartVideo(data);
            },
            /**
             * 콘텐츠 종료 요청.
             * @description 나무시리즈에서 정의. (현재 사용안함)
             * @param  {String} data 앱에 전달할 인수. 현재 항상 빈문자열.
             */
            wnEndVideo(data) {
                kumonmbr.wnEndVideo(data);
            },
            /**
             * 카메라 시작 요청.
             * @description 인수들은 카메라가 표시될 사각 영역을 의미하며 단위는 zoom 고려안된 css 픽셀 단위 문자열. (나무시리즈 콘텐츠만 사용)
             * @param  {String} x 카메라 영역의 좌상단 x좌표.
             * @param  {String} y 카메라 영역의 좌상단 y좌표
             * @param  {String} w 카메라 영역의 너비
             * @param  {String} h 카메라 영역의 높이
             */
            wnCameraViewStart(x, y, w, h) {
                kumonmbr.wnCameraViewStart(x, y, w, h);
            },
            /**
             * 카메라 종료 요청.
             * @description 나무시리즈 콘텐츠만 사용.
             * @param  없음.
             */
            wnCameraViewClose() {
                kumonmbr.wnCameraViewClose();
            },
            /**
             * 비디오 재생간 버퍼링 발생시 호출.
             * @description 나무시리즈 콘텐츠만 사용.
             * @param  {String} data 앱에 전달할 인수. 문자열 '9000'으로 고정.
             */
            wnWebMessage(data) {
                kumonmbr.wnWebMessage(data);
            },
        };

        /**
         * 파라미터 Char 로 모두 변환하여 배열에 넣어 반환하는 함수
         * @author 유승빈
         * @since 2023.12.14
         */
        const parameterToCharArr = (...args) => {
            const array = [];

            for (let i = 0, length = args.length; i < length; i++) {
                let char = '';
                const arg = args[i];
                char += arg;
                array.push(char);
            }

            return array;
        };

        /**
         * iOS 연동 API
         * @author 유승빈
         * @since 2023.12.14
         */
        const iosBridge = {
            //bridge for apple ios
            /*
                androidBridge가 가진 17개 method를 아래 구조로 정의해야 함.
                1. webkit.messageHandlers.kumonmbr.postMessage(msgData) 형태로 호출. 안드로이드용 연동 함수 명과 인수를 msgData에 표현하는 형태로 정의		
                2. msgData는 {op:'안드로이드 연동 함수명', param:['인수1','인수2'…] } 형태의 자바스크립트 객체를 문자열화한 포맷을 가짐.		
                3. param은 항상 문자열 배열이며 인수가 없을 때도 빈 배열로 [] 넘김

                ex1) webkit.messageHandlers.kumonmbr.postMessage(`{op:'onPageLoadStart',param:['15']}`);
                ex2) webkit.messageHandlers.kumonmbr.postMessage(`{ op:'onCanSubmit', param : ['3','true','no message','{"data":"blah.."}']}`);
                ex3) webkit.messageHandlers.kumonmbr.postMessage(`{ op:'startCamera', param:['100','200','640','480]}`);

                Method : webkit.messageHandlers.kumonmbr.postMessage();
            */

            /**
             * app to web함수인 nwCanSubmit 호출에 대한 응답.
             * @description 정교재만 사용. (pgNo에 지정된 페이지가 제출 가능 상태이면 canSubit에 'true', 제출 불가면 'false'로 호출)
             * @param  {String} pgNo 페이지 번호. 1~20 사이의 정수. (20은 향후 변경 가능)
             * @param  {String} canSubmit pgNo해당 페이지가 제출 가능 상태면 'true',아니면 'false'로 호출
             * @param  {String} message 제출 불가 이유 문자열. 현재 항상 빈문자열로 호출
             * @param  {String} data 제출시 서버에 저장할 (통상 json을 문자열화한) 문자열.
             * @return {undefined} undefined
             */
            wnIsCanSubmit(pgNo, canSubmit, message, data) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnIsCanSubmit', param: parameterToCharArr(pgNo, canSubmit, message, data) }));
            },
            /**
             * 진행 중인 녹음 취소 요청.
             * @description 정교재만 사용
             * @param  {String} cbEvalString 녹음 취소 후 앱에서 실행해줄 자바스크립트 코드 문자열. ex) `gCtl.onRecordCancel(7,20)`
             * @return {undefined} undefined
             */
            wnRecordVoiceCancel(cbEvalString) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnRecordVoiceCancel', param: parameterToCharArr(cbEvalString) }));
            },
            /**
             * 콘텐츠 페이지가 로딩 시작될 때 호출.
             * @description 정교재만 사용. (nwStartLoadPage 및 nwMovePage에 대한 응답. 콘텐츠는 이 함수 호출 후 로딩 완료시 onPageLoadDone 호출함)
             * @param  {String} pgNo 로드되는 페이지 번호. 1~20 사이의 정수. (20은 향후 변경 가능)
             * @return {undefined} undefined
             */
            wnStartLoadPage(pgNo) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnStartLoadPage', param: parameterToCharArr(pgNo) }));
            },
            /**
             * 콘텐츠 페이지 로딩 완료시(e.g. 콘텐츠 내 이미지 모두 표시됨) 호출.
             * @description 정교재만 사용.
             * @param  {String} pgNo 로드되는 페이지 번호. 1~20 사이의 정수. (20은 향후 변경 가능)
             * @return {undefined} undefined
             */
            wnPageLoadFinish(pgNo) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnPageLoadFinish', param: parameterToCharArr(pgNo) }));
            },
            /**
             * 제출/완료 버튼 활성화/비활성화 요청.
             * @description 정교재만 사용. (사용자가 페이지 학습을 제출 가능한 상태까지 진행한 경우 호출. 이 함수 호출 결과로 앱은 app to web 함수인 nwIsCompleted 호출해야 함)
             * @param  {String} bEnable 'true'이면 제출 버튼 활성화. 현재 항상 'true'로 호출
             * @param  {String} data 서버에 저장할 (통상 json을 문자열화한) 문자열. 저장할 자료가 없을 경우 빈문자열
             * @return {undefined} undefined
             */
            wnEnableSubmit(bEnable, data) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnEnableSubmit', param: parameterToCharArr(bEnable, data) }));
            },

            /**
             * native가 녹음을 시작할 수 없는 시점이 있어서 만든 녹음 가능 여부 조회 함수.
             * @description 정교재만 사용. (앱은 이 함수 호출 결과로 app to web 함수인 nwIsRecordVoiceCheck 호출해야 함)
             * @param {undefined} undefined
             * @return {undefined} undefined
             */
            wnRecordVoiceCheck() {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnRecordVoiceCheck', param: parameterToCharArr() }));
            },
            /**
             * 콘텐츠가 풀이 가능 상태가 되었을 경우 호출.
             * @description nwStartStudy 에 대한 응답. 정교재, 나무시리즈 콘텐츠만 사용.
             * @param {String} data 앱에 전달할 문자열. 정교재인 경우 페이지 번호. 나무시리즈는 콘텐츠 코드.
             */
            wnPageEnabled(data) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnPageEnabled', param: parameterToCharArr(data) }));
            },

            /**
             * 앱이 녹음한 음원을 재생 요청. 정교재,나무시리즈에서 사용.
             * @description 정교재,나무시리즈에서 사용.
             * @param  {String} filePath 재생할 file 경로
             * @param {String} cbEvalString 음원 재생 완료 후 엡에서 실행해줘야할 자바스크립트 코드 문자열. ex) `gCtl.onPlayRecordDone(5,9)`
             */
            wnPlaySound(filePath, cbEvalString) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnPlaySound', param: parameterToCharArr(filePath, cbEvalString) }));
            },

            /**
             * 녹음 음원 재생 취소 요청.
             * @description 정교재,나무시리즈에서 사용.
             * @param  {String} filePath 재생 취소할 음원 경로
             * @param {String} cbEvalString 음원 재생 취소 후 엡에서 실행해줘야할 자바스크립트 코드 문자열. ex) `gCtl.onCancelPlayRecord(5,9)`
             */
            wnStopPlaySound(filePath, cbEvalString) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnStopPlaySound', param: parameterToCharArr(filePath, cbEvalString) }));
            },

            /**
             * duration 초 동안 녹음 요청.
             * @description 정교재,나무시리즈에서 사용
             * @param  {String} duration 녹음 해야하는 초단위 시간. 문자열임.
             * @param {String} cbEvalString 녹음 완료 후 엡에서 실행해줘야할 자바스크립트 코드 문자열.
             * @todo 확인 필요: 현재 returnFunctionName 대신 nwIsRecordVoiceStart함수가 호출되어 호출시 cbEvalString을 ''로 주고 있음.
             */
            wnRecordVoice(duration, cbEvalString) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnRecordVoice', param: parameterToCharArr(duration, cbEvalString) }));
            },

            /**
             * 콘텐츠 재시작 요청.
             * @description 나무시리즈 콘텐츠만 사용.
             * @param  {String} data 앱에 전달할 인수. 현재 항상 빈문자열.
             */
            wnReplay(data) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnReplay', param: parameterToCharArr(data) }));
            },
            /**
             * 콘텐츠 종료 요청.
             * @description 나무시리즈 콘텐츠만 사용.
             * @param {undefined} undefined
             */
            wnContentExit() {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnContentExit', param: parameterToCharArr() }));
            },
            /**
             * 동영상 시작 요청.
             * @description 나무시리즈에서 정의. (현재 사용안함)
             * @param  {String} data 앱에 전달할 인수. 현재 항상 빈문자열.
             */
            wnStartVideo(data) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnStartVideo', param: parameterToCharArr(data) }));
            },
            /**
             * 콘텐츠 종료 요청.
             * @description 나무시리즈에서 정의. (현재 사용안함)
             * @param  {String} data 앱에 전달할 인수. 현재 항상 빈문자열.
             */
            wnEndVideo(data) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnEndVideo', param: parameterToCharArr(data) }));
            },
            /**
             * 카메라 시작 요청.
             * @description 인수들은 카메라가 표시될 사각 영역을 의미하며 단위는 zoom 고려안된 css 픽셀 단위 문자열. (나무시리즈 콘텐츠만 사용)
             * @param  {String} x 카메라 영역의 좌상단 x좌표.
             * @param  {String} y 카메라 영역의 좌상단 y좌표
             * @param  {String} w 카메라 영역의 너비
             * @param  {String} h 카메라 영역의 높이
             */
            wnCameraViewStart(x, y, w, h) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnCameraViewStart', param: parameterToCharArr(x, y, w, h) }));
            },
            /**
             * 카메라 종료 요청.
             * @description 나무시리즈 콘텐츠만 사용.
             * @param  없음.
             */
            wnCameraViewClose() {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnCameraViewClose', param: parameterToCharArr() }));
            },
            /**
             * 비디오 재생간 버퍼링 발생시 호출.
             * @description 나무시리즈 콘텐츠만 사용.
             * @param  {String} data 앱에 전달할 인수. 문자열 '9000'으로 고정.
             */
            wnWebMessage(data) {
                webkit.messageHandlers.kumonmbr.postMessage(JSON.stringify({ op: 'wnWebMessage', param: parameterToCharArr(data) }));
            },
        };

        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.kumonmbr) return iosBridge;
        else if (window.kumonmbr) return androidBridge;
    })();