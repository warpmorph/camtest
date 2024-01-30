/**
 * @description aspen 공통 라이브러리
 * 
 * @version     v0.1.8
 * @last_update 19.11.26 18:12
 */

 // https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function(predicate) {
       // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
  
        var o = Object(this);
  
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;
  
        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
  
        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];
  
        // 5. Let k be 0.
        var k = 0;
  
        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return kValue.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          // e. Increase k by 1.
          k++;
        }
  
        // 7. Return undefined.
        return undefined;
      },
      configurable: true,
      writable: true
    });
  }

/**
 * findIndex
 */
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function(predicate) {
            'use strict';
            if (this == null) {
                throw new TypeError('Array.prototype.findIndex called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;
    
            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return i;
                }
            }
            return -1;
        },
        enumerable: false,
        configurable: false,
        writable: false
    });
}

/**
 * getPowerSets
 */
if (!Array.prototype.hasOwnProperty('getPowerSets')) {
    Object.defineProperty(Array.prototype, 'getPowerSets', {
        value: function() {
            var cloneArr = this.slice();
            return cloneArr.reduce(function(powerSets, value) {
                return powerSets.concat(powerSets.map(function(powerSet) {
                    var subPowerSets = [value];
                    if (powerSet.length > 0) {
                        Array.prototype.push.apply(subPowerSets, powerSet);
                    }
                    return subPowerSets.sort();
                }));
            }, [[]]).filter(function(powerSets) {
                return powerSets.length > 0;
            });
        },
        configurable: true,
        writable: true
    });
}
 
 /**
  * groupBy
  */
 if (!Array.prototype.hasOwnProperty('groupBy')) {
    Object.defineProperty(Array.prototype, 'groupBy', {
        value: function(prop) {
            return this.reduce(function(groups, item) {
                var val = item[prop];
                groups[val] = groups[val] || [];
                groups[val].push(item);
                return groups;
            }, {});
        },
        configurable: true,
        writable: true
    });
}

/**
 * 배열을 섞음 (레퍼런스에 직접 접근 x)
 */
if (!Array.prototype.hasOwnProperty('shuffle')) {
    Object.defineProperty(Array.prototype, 'shuffle', {
        value: function() {
            var cloneArr = this.slice();  // 레퍼런스를 카피시켜서 함
            
            var currentIndex = cloneArr.length;
            var temp;
            var randomIndex;
            
            while (0 !== currentIndex) {
            	randomIndex = Math.floor(Math.random() * currentIndex);
            	currentIndex--;
            	
            	temp = cloneArr[currentIndex];
            	cloneArr[currentIndex] = cloneArr[randomIndex];
            	cloneArr[randomIndex] = temp;
            }
            
            return cloneArr;
        },
        configurable: true,
        writable: true
    });
}

/**
 * 배열을 섞음 (원소들이 원래의 자리에 있지 않고 모두 섞임)
 */
if (!Array.prototype.hasOwnProperty('derange')) {
    Object.defineProperty(Array.prototype, 'derange', {
        value: function() {
            var cloneArr = this.slice();
            
            if (cloneArr.length < 2) {
                return cloneArr;
            }
            
            var result = [];
            var idx, i, iLen;
            
            var lastMoved = false;
            
            for (i = 0, iLen = cloneArr.length - 1; i < iLen; i++) {
                if (cloneArr.length == 2 && !lastMoved) {
                    result = result.concat(cloneArr.reverse().splice(0,2))
                    break;
                }
                
                do {
                    idx = Math.random() * cloneArr.length | 0;
                } while (this.indexOf(cloneArr[idx]) === result.length)
                
                result.push(cloneArr.splice(idx, 1)[0]);
                lastMoved = lastMoved || idx === cloneArr.length;
            }
            
            if (cloneArr.length) {
                result.push(cloneArr[0]);
            }
            
            return result;
        },
        configurable: true,
        writable: true
    });
}

/**
 * 쿼리스트링을 파싱해서 key값에 해당하는 value 반환
 * 
 * @param {string} key 가져올 key 값
 * @returns {string} value key 값에 해당하는 value 값
 * 
 */
if (!String.prototype.hasOwnProperty('getValueFromQueryStr')) {
    Object.defineProperty(String.prototype, 'getValueFromQueryStr', {
        value: function(key) {
            var queryStrList = this.split('&');
            var splitData;
            
            var result = queryStrList.find(function(value) {
                splitData = value.split('=');
                if (splitData.length === 2) {
                    return splitData[0] === key;
                }
            });
            
            if (result) {
                return result.split('=')[1];
            }
        },
        configurable: true,
        writable: true
    });
}

/**
 * Date format
 * 
 * @param {string} format 날짜 포맷
 * @returns {string} formatting 된 문자열
 * 
 */
if (!Date.prototype.hasOwnProperty('format')) {
	Object.defineProperty(Date.prototype, 'format', {
        value: function(format) {
            var date = this;
    		return format.replace(/(yyyy|MM|dd|E|hh|mm|ss|ms)/g, function(item) {
    			switch (item) {
    				case "yyyy": return date.getFullYear();
    				case "MM": return date.getMonth() + 1;
    				case "dd": return date.getDate();
    				case "hh": return String(date.getHours()).padStart(2, 0);
    				case "mm": return String(date.getMinutes()).padStart(2, 0);
    				case "ss": return String(date.getSeconds()).padStart(2, 0);
    				case 'ms': return String(date.getMilliseconds()).padStart(3, 0)
    				default: return item;
    			}
    		});
        },
        configurable: true,
        writable: true
    });
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// Widget Prototype API
///////////////////////////////////////////////////////////////////////////////////////////////////////
var _wgtApi = {
/**
 * 위젯의 media를 재생
 * 
 * @param {object} param
 *        {string} param.media 실행할 media id
 *        {string} param.state 변경할 state (기본값: Play)
 *        {function} param.on[Event.param] 각 이벤트마다 실행될 함수
 * 
 */
playMedia: function(param) {
	param = param || {};
	
	if (param.media) {
		this.set('media', param.media);
		delete param.media;
	}
	
	this.changeState(param.state || 'Play');
	delete param.state;
	
	var listenerFuncs = [];
	for (var listenerFunc in param) {
	    if (listenerFunc.indexOf('on') === -1) {
	        continue;
	    }
	    
	    listenerFuncs.push(listenerFunc[param]);
	}
	
	if (listenerFuncs.length > 0) {
    	this.addEventListener(
            'media',
            function(e) {
                if (!e.param) {
                    return;
                }
                
                return ('on' + e.param.replace(/ /g , '') in param) &&
                    typeof param['on' + e.param.replace(/ /g , '')] === 'function' &&
                    param['on' + e.param.replace(/ /g , '')](e);
        	}
        );
	}
},

/**
 * 위젯의 Animation 재생
 * 
 * @param {object} param
 *        {string} param.state 변경할 state (기본값: Play)
 *        {function} param.on[Event.param] 각 이벤트마다 실행될 함수
 * 
 */
playAnimation: function(param) {
    param = param || {};
    
    this.changeState(param.state || 'Play');
    delete param.state;
    
    var listenerFuncs = [];
	for (var listenerFunc in param) {
	    if (listenerFunc.indexOf('on') === -1) {
	        continue;
	    }
	    
	    listenerFuncs.push(listenerFunc[param]);
	}
	
	if (listenerFuncs.length > 0) {
        this.addEventListener(
            'animation',
            function(e) {
                if (!e.param) {
                    return;
                }
                
                return ('on' + e.param.replace(/ /g , '') in param) &&
                    typeof param['on' + e.param.replace(/ /g , '')] === 'function' &&
                    param['on' + e.param.replace(/ /g , '')](e);
        	}
        );
	}
},

/**
 * 위젯의 가운데 좌표를 반환
 * 
 * @returns {object} obj
 *          {int} obj.x x좌표
 *          {int} obj.y y좌표
 * 
 */
getCenterPos: function() {
	return {
		x: this.get('x') + (this.get('w') / 2),
		y: this.get('y') + (this.get('h') / 2),
	}
},

/**
 * 해당 좌표로 가운데 이동
 * 
 * 
 */
moveToCenter: function(x, y, param) {
    this.moveTo(x - (this.get('w') / 2), y - (this.get('h') / 2), param);
},

/**
 * 상대 위젯의 중간 좌표로 moveTo
 * 
 * @param {Widget} parentWgt 이동할 대상 위젯
 * @param {object} param 일반 moveTo 함수의 param 값
 * 
 */
moveToCenterOfParent: function(parentWgt, param) {
	var centerPos = parentWgt.getCenterPos();
	this.moveToCenter(centerPos.x, centerPos.y, param);
},

/**
 * 위젯의 중간 좌표를 기준으로 상대 위젯 안에 위치해 있는지 확인
 * 
 * @param {Widget} areaWgt 영역 위젯
 * @returns {boolean} 영역 안에 있는지 여부
 * 
 */
// !Widget.hasOwnProperty.checkInArea &&
// if (!Widget.prototype.hasOwnProperty('checkInArea')) {
checkInArea: function(areaWgt) {
    // 중간 좌표
    var dragPos = this.getCenterPos();
    
    // 인식 영역
    var areaPos = {
    	widthLeft: areaWgt.get('x'),
    	widthRight: areaWgt.get('x') + areaWgt.get('w'),
    	heightTop: areaWgt.get('y'),
    	heightBottom: areaWgt.get('y') + areaWgt.get('h'),
    };
    
    // 좌표가 영역에 있는지 체크해서 반환
    return (dragPos.x > areaPos.widthLeft && dragPos.x < areaPos.widthRight) &&
    	(dragPos.y > areaPos.heightTop && dragPos.y < areaPos.heightBottom);
},

/**
 * 위젯 간의 충돌을 체크
 * 
 * @param {Widget} collisionWgt 충돌을 체크할 위젯
 * @returns {boolean} 충돌 여부
 * 
 */
checkCollision: function(collisionWgt) {
	return (this.get('x') <= collisionWgt.get('x') + collisionWgt.get('w') &&  	// 좌
        this.get('x') + this.get('w') >= collisionWgt.get('x')) &&          	// 우
        (this.get('y') <= collisionWgt.get('y') + collisionWgt.get('h') &&  	// 상
        this.get('y') + this.get('h') >= collisionWgt.get('y'));            	// 하
},

/**
 * 위젯 Aspen Event Listener를 추가
 * 
 * @param {string} type 이벤트 Type
 * @param {function} listener 이벤트 리스너 함수 (해당 함수의 리턴값이 true일 경우 1회용 리스너로 등록)
 * 
 */
addEventListener: function(type, listener) {
    this.local.listeners = this.local.listeners || {};
    this.local.listeners[type] = this.local.listeners[type] || [];
    this.local.listeners[type].push(listener);
},

/**
 * 위젯 Aspen Event Listener를 삭제
 * 
 * @param {string} type 이벤트 Type
 * @param {function} listener 이벤트 리스너 함수 (메모리 주소를 비교하여 삭제하기에 함수 레퍼런스 값을 넣어야 함)
 * 
 */
removeEventListener: function(type, listener) {
    this.local.listeners = this.local.listeners || {};
    this.local.listeners[type] = this.local.listeners[type] || [];
    this.local.listeners[type] = this.local.listeners[type].filter(
        function(listenerFunc) {
            // console.log('log', listenerFunc !== listener);
            return !(listenerFunc === listener);
        }
    );
},


/**
 * 위젯을 깜빡이게 함
 * 
 * @param {int} delay 딜레이 (1/1000sec)
 * @param {object} param opacityTo param 객체   @nullable
 * 
 */
blink: function(delay, param) {
    this.local.isBlink = !this.local.isBlink;
    this.opacityTo(this.local.isBlink ? 0.3 : 1, param);
    
    var wgt = this;
    this.local.blinkTimeoutId = setTimeout(function() {
        wgt.blink(delay, param);
    }, delay);
},

/**
 * 위젯 깜빡임을 멈춤
 */
stopBlink: function() {
    if (this.local.blinkTimeoutId) {
        clearTimeout(this.local.blinkTimeoutId);
        this.local.blinkTimeoutId = undefined;
    }
    
    this.local.isBlink = undefined;
    this.opacityTo(1);
},


/**
 * 드래그 시작시 관련 정보 저장
 * 
 * @param {object} pos 해당 좌표로 옮김 (마우스 좌표 등)    @nullable
 * @param {object} param moveTo param                       @nullable
 */
saveDragStart: function(pos, param) {
    this.local.dragStartPos = {
        x: this.get('x'),
        y: this.get('y')
    }
    
    typeof pos === 'object' && this.moveTo(pos.x - this.get('w') / 2, pos.y - this.get('h') / 2, param);
},

/**
 * 드래그 종료시 관련 정보를 토대로 원래 좌표로 돌려주는 함수
 */
executeDragEnd: function(param) {
    if (param && /(xrJelly|xrSpring)/g.test(param.timing)) {
        var curPos = {
            x: this.get('x'),
            y: this.get('y')
        }
        
        this.moveTo(this.local.dragStartPos.x, this.local.dragStartPos.y);
        this.moveTo(curPos.x, curPos.y, param);
    } else {
        this.moveTo(this.local.dragStartPos.x, this.local.dragStartPos.y, param);
    }
    
    delete this.local.dragStartPos;
},

getZoom: function() {
    return this.tag.style.transform
        ? JSON.parse('{' + (this.tag.style.transform.match(/scale(X|Y)\((.*?\))/g) ? this.tag.style.transform.match(/scale(X|Y)\((.*?\))/g).map(function(value) { var str = value.replace(/(scale|\(|\))/g, ''); return '"' + str.charAt(0).replace(/X/gi, 'w').replace(/Y/gi, 'h') + '":' + (parseFloat(str.substring(1)) * 100); }).join(',') : '"w": 100, "h": 100') + '}')
        : {w: 100, h: 100};
}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// End Widget Prototype API
///////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////
// Context API
///////////////////////////////////////////////////////////////////////////////////////////////////////

var _ctxtApi = {
/**
 * 해당 페이지의 label과 id값을 가져옴
 * 
 * @param {string} pageId 값을 가져올 page id (없을 때는 현재 실행중인 페이지로 가져옴)
 * @returns {object} pageData pageId 값에 해당하는 페이지 정보
 * 
 */
getPageData: function(pageId) {
	if (!pageId) {
		pageId = this.getPage();
	}
	
	return this.File.browse('pages').find(function(pageData) {
		return pageData.id === pageId;
	});
},
 
/**
 * 특정 범위 랜덤 값 가져오기
 * 
 * @param {int} min 최소 값
 * @param {int} max 최대 값
 * 
 * @returns {int} num 랜덤 값
 * 
 */
getRandomIntInclusive: function(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
},

/**
 * 오디오 개별 등록
 * 
 * @param {string} type 오디오를 분류할 타입
 * @param {object} data
 *        {string} data.id 오디오를 분류할 사용자 정의 id
 *        {string} data.media 오디오 media
 *        {string} data.playOption 오디오 옵션 @nullable
 * 
 */
registerAudio: function(type, data) {
    var audioData = this.get('$audioData') || {};
    audioData[type] = audioData[type] || [];
    audioData[type].push(data);
    // audioData[type].push({
    //     id: data.id,
    //     media: data.media,
    //     playOption: data.playOption // @nullable
    // });
    
    this.set('$audioData', audioData);
},

/**
 * 데이터 테이블로 부터 오디오 등록
 * 
 * @param {array} dataTable 오디오 데이터 테이블
 * @param {type} type 오디오를 분류할 타입
 * @param {object} indexData    해당 값이 있는 컬럼의 index
 *        {string} indexData.id 오디오를 분류할 사용자 정의 id
 *        {string} indexData.media 오디오 media
 *        {string} indexData.playOption 오디오 옵션 @nullable
 * 
 */
registerAudioFromDataTable: function(dataTable, type, indexData) {
    var _this = this;
    
	dataTable.forEach(function(value) {
	    _this.registerAudio(type, [
	        value[indexData.id],
	        value[indexData.media],
	        value[indexData.playOption] // @nullable
	    ]);
	});
},

/**
 * 오디오 소스마다 위젯을 생성하여 저장해주는 함수
 */
initAudios: function() {
    var audioData = this.get('$audioData') || {};
    var audios = this.get('$audios') || {};

    var audio = this.$W('a$audio');
    
    for (var type in audioData) {
        for (var mediaData in audioData[type]) {
            if (typeof audioData[type][mediaData] !== 'function') {
                if (!audios[type]) {
                    audios[type] = {};
                }
                
                if (!audios[type][audioData[type][mediaData][0]]) {
                    var label = audio.get('label') + '_' + type + '_' + audioData[type][mediaData][0];

                    audios[type][audioData[type][mediaData][0]] = this.$W(label, undefined, {checkOnly: true});
                    if (!audios[type][audioData[type][mediaData][0]]) {
                        audios[type][audioData[type][mediaData][0]] = audio.clone();
                        audios[type][audioData[type][mediaData][0]].set('label', label);
                    }
                    audios[type][audioData[type][mediaData][0]].set('media', audioData[type][mediaData][1]);
                    audios[type][audioData[type][mediaData][0]].setData('loop', audioData[type][mediaData][2] === 'loop');
                }
            }
        }
    }
    
    this.set('$audios', audios);
},


/**
 * @brief 오디오를 옵션에 따라 정지시킴
 * @param {object} options 
 *        {array<string>} options.ignoreIds 중지를 예외할 오디오 위젯들의 id list
 *        {array<string>} options.types 중지시킬 오디오 위젯들의 type
 * 
 */
 stopAudio: function(options) {
    var audios = this.get('$audios');
     
    options = options || {};
    options.ignoreIds = options.ignoreIds || [];
    
    for (var type in audios) {
        if (!options.types || (options.types && Array.isArray(options.types) && options.types.indexOf(type) !== -1)) {
            for (var id in audios[type]) {
                if (!options.ignoreIds.find(function(ignoreId) {
                    return ignoreId === id;
                })) {
                    if (audios[type][id].get('state') !== 'Stop') {  // 오디오 위젯이 많아지면 state 변환 작업이 무거워지기 때문에 Stop이 아닌 상태의 오디오만
                        audios[type][id].changeState('Stop');
                    }
                }
            }
        }
    }
},

/**
 * 해당하는 id의 오디오를 찾아 반환
 * 
 * @param {string} id 등록된 오디오의 id
 * @param {string} type 오디오의 검색 범위를 해당 type으로 제한 @nullable
 * @returns {Widget || array<Widget>} 검색된 결과를 Audio Widget으로 반환 (2개 이상 검색시 배열로 반환, 결과 값이 없으면 undefined)
 */
getAudio: function(id, type) {
    var audios = this.get('$audios');
    var findAudios = [];
    
    for (var audioType in audios) {
        if (typeof type !== 'undefined') {
            if (audioType !== type) {
                continue;
            }
        }
        
        for (var audioId in audios[audioType]) {
            audioId === id && findAudios.push(audios[audioType][audioId]);
        }
    }
    
    if (findAudios.length > 0) {
        if (findAudios.length === 1) {
            return findAudios[0];
        }
        
        return findAudios;
    }
}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// End Context API
///////////////////////////////////////////////////////////////////////////////////////////////////////

var addWidgetMethod = function() {
    with (this) {
        for (var api in _wgtApi) {
            if (!Widget.prototype.hasOwnProperty(api)) {
                Object.defineProperty(Widget.prototype, api, {
                    value: _wgtApi[api],
                    configurable: true,
                    writable: true
                });
            }
        }
    }
}

var addContextMethod = function() {
	with (this) {
		for (var api in _ctxtApi) {
		    if (!this.hasOwnProperty(api)) {
		        this[api] = _ctxtApi[api];
		    }
		}
	}
}

apx.addEventListener('pageBubble', function(Event, ctxt) {
    if (!ctxt.isApply) {
        ctxt.isApply = true;
        
        addWidgetMethod.apply(ctxt);
        addContextMethod.apply(ctxt);
        
        const ctxs = ctxt.File.get("$ctxs") || [];
        ctxs.push(ctxt);
        ctxt.File.set("$ctxs", ctxs);
    }
    
    if (Event.target && Event.type) {
        Event.targetLabel = Event.target.get('label');
        
        var eventName = Event.type.toLowerCase().replace(/ /g, '');
        
        ('listener' in Event.target.local) &&
        (('on' + eventName) in Event.target.local.listener) &&
        typeof Event.target.local.listener['on' + eventName] === 'function' &&
        Event.target.local.listener['on' + eventName].apply(ctxt, [Event]) &&
        delete Event.target.local.listener['on' + eventName];
        
        ('listeners' in Event.target.local) &&
        (eventName in Event.target.local.listeners) &&
        Array.isArray(Event.target.local.listeners[eventName]) &&
        (Event.target.local.listeners[eventName] =
            Event.target.local.listeners[eventName]
            .filter(
                function(listener) {
                    return typeof listener === 'function' && !listener.apply(ctxt, [Event]);
                }
            )
        );
    }
});

// var overlayCtx;
// apx.addEventListener("pageBubble", function(e, ctx) {
//     overlayCtx = ctx;
// }, {
//     target: ["Overlay"],
//     accept: ["Page Create"],
// })
apx.addEventListener("pageBubble", function(e, ctx) {
    if (!ctx.File.get("$isCreate") && ctx.getPageData()) {
        if (ctx.File.get("$callStart")) {
            setTimeout(_ => {
                ctx.File.get("$callStart", false);
                apx.fireEvent("Custom", "Overlay|ContentStart");
            }, 1000 * .5);
        } else {
            ctx.File.set("$isCreate", true);
        }
        // apx.fireEvent("Custom", "Overlay|ContentStart");
    }
}, {
    // pre: true,
    accept: ["Page Create"],
});