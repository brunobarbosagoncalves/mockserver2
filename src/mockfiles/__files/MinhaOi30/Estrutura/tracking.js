/*!  - v - 2018-12-17 */
var VI_API = VI_API;

var VI_API_TEMP = VI_API;

console.log('@tonni', VI_API, VI_API_TEMP);

VI_API = function() {
    var target = 1;
    var channel = 1;
    var source = 1;
    var widgetId = 16;
    var idAvi = 16;
    var property = "88888879";
    var launchType = "embedded";
    var customVars = [];
    var eyeCatcher = 0;
    var chatContainer = document.body;
    var baseDomain = "";
    var protocol = "https:" == document.location.protocol ? "https://" : "http://";
    var customLicense = undefined;
    var useMemory = false;
    var widthAVI = 600;
    var heightAVI = 550;
    return {
        init: function() {
            console.log('@tonni INIT VI_API');
            this.license = VI_API_TEMP.license;
            if (VI_API_TEMP.source != undefined && typeof VI_API_TEMP.source == "number") {
                this.setSource(VI_API_TEMP.source);
            }
            if (VI_API_TEMP.target != undefined && typeof VI_API_TEMP.target == "number") {
                this.setTarget(VI_API_TEMP.target);
            }
            if (VI_API_TEMP.channel != undefined && typeof VI_API_TEMP.channel == "number") {
                this.setChannel(VI_API_TEMP.channel);
            } else {
                this.setChannel(1);
                if (this.verifyIsMobile()) {
                    this.setChannel(2);
                }
            }
            if (VI_API_TEMP.customVars != undefined && VI_API_TEMP.customVars.length > 0) {
                this.setCustomVars(VI_API_TEMP.customVars);
            }
            if (VI_API_TEMP.launchType != undefined && VI_API_TEMP.launchType.length > 0) {
                this.setLaunchType(VI_API_TEMP.launchType);
                console.log('@tonni', this.getLaunchType());
            }
            if (VI_API_TEMP.eyeCatcher != undefined) {
                this.setHasEyeCatcher(VI_API_TEMP.eyeCatcher);
            }
        },
        getIdAvi: function() {
            return idAvi;
        },
        getWidgetId: function() {
            return widgetId;
        },
        getProperty: function() {
            return property;
        },
        getWidthAVI: function() {
            return widthAVI;
        },
        getHeightAVI: function() {
            return heightAVI;
        },
        getSource: function() {
            return source;
        },
        setSource: function(pSource) {
            source = pSource;
        },
        getTarget: function() {
            return target;
        },
        setTarget: function(pTarget) {
            target = pTarget;
        },
        getChannel: function() {
            return channel;
        },
        setChannel: function(pChannel) {
            channel = pChannel;
        },
        getBaseDomain: function() {
            return baseDomain;
        },
        setBaseDomain: function(pBaseDomain) {
            baseDomain = pBaseDomain;
        },
        getProtocol: function() {
            return protocol;
        },
        setProtocol: function(pProtocol) {
            protocol = pProtocol;
        },
        getChatContainer: function() {
            return chatContainer;
        },
        setChatContainer: function(pChatContainer) {
            chatContainer = pChatContainer;
        },
        setCustomLicense: function(pCustomLicense) {
            customLicense = pCustomLicense;
        },
        shouldUseMemory: function() {
            return useMemory;
        },
        setUseMemory: function(pUseMemory) {
            useMemory = pUseMemory;
        },
        isValidLicense: function() {
            if (customLicense != undefined) {
                return VI_API.license == customLicense;
            } else {
                return VI_API.license == "VI-" + VI_API.getProperty() + "-" + VI_API.getWidgetId();
            }
        },
        getLaunchType: function() {
            return launchType;
        },
        setLaunchType: function(pLaunchType) {
            console.log('@tonni', pLaunchType);
            if ([ "embedded", "popup", "redirect" ].indexOf(pLaunchType) > -1) {
                launchType = pLaunchType;
            }
        },
        hasEyeCatcher: function() {
            return eyeCatcher;
        },
        setHasEyeCatcher: function(pEyeCatcher) {
            eyeCatcher = pEyeCatcher;
        },
        setCustomVars: function(pCustomVariables) {
            customVars = [];
            for (var i = 0; i < pCustomVariables.length; i++) {
                var customVar = pCustomVariables[i];
                var customVarName = customVar.name;
                var customVarValue = customVar.value;
                customVars[customVarName] = customVarValue;
            }
        },
        getParametersFromCustomVars: function() {
            var queryString = "";
            if (customVars) {
                for (varName in customVars) {
                    var name = varName;
                    var value = customVars[varName];
                    if (value != null && value != "") {
                        queryString = queryString + "&" + name + "=" + encodeURIComponent(value);
                    }
                }
            }
            queryString = queryString + "&launchType=" + encodeURIComponent(launchType);
            return queryString;
        },
        hasLocalStorage: function() {
            return typeof Storage !== "undefined";
        },
        getBaseStorageKey: function() {
            var domain = location.protocol + location.host;
            return domain + "/" + this.getIdAvi() + "/" + this.getWidgetId();
        },
        getState: function() {
            if (this.hasLocalStorage) {
                console.log("getState " + this.getBaseStorageKey() + "/state");
                return localStorage.getItem(this.getBaseStorageKey() + "/state");
            }
        },
        setState: function(state) {
            if (this.hasLocalStorage) {
                console.log("setState " + this.getBaseStorageKey() + "/state" + " = " + state);
                window.localStorage.setItem(this.getBaseStorageKey() + "/state", state);
            }
        },
        verifyIsMobile: function() {
            if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) return false;
            var userAgent = navigator.userAgent.toLowerCase();
            if (userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|up\.browser|up\.link|webos|wos)/i) != -1) {
                return true;
            }
        }
    };
}();

VI_API.init();

var VI_EC = function() {
    var VI_globalVelocity = 4;
    var VI_distStartSlider = 180;
    var VI_distanceOut = 90;
    var eyeCatcherDiv = null;
    var eyeCatcherHeight = 0;
    var eyeCatcherWidth = 0;
    return {
        getEyeCatcherDiv: function() {
            return eyeCatcherDiv;
        },
        setEyeCatcherDiv: function(divHtml) {
            eyeCatcherDiv = divHtml;
        },
        getEyeCatcherHeight: function() {
            return eyeCatcherHeight;
        },
        setEyeCatcherHeight: function(height) {
            eyeCatcherHeight = height;
        },
        getEyeCatcherWidth: function() {
            return eyeCatcherWidth;
        },
        setEyeCatcherWidth: function(width) {
            eyeCatcherWidth = width;
        },
        fadeIn: function(obj, delay) {
            if (obj == null) {
                return;
            }
            if (delay == null) {
                delay = 360;
            }
            setTimeout(function() {
                obj.style.opacity = "0";
                obj.style.display = "block";
                var y = 1, fadeInFunc = setInterval(function() {
                    if (y < 0) clearInterval(fadeInFunc);
                    obj.style.opacity = (y - 1) * -1;
                    y -= .01;
                }, VI_globalVelocity);
            }, delay);
        },
        fadeOut: function(obj) {
            var y = 0, fadeOutFunc = setInterval(function() {
                if (y > 1) {
                    obj.style.display = "none";
                    clearInterval(fadeOutFunc);
                }
                obj.style.opacity = (y - 1) * -1;
                y += .01;
            }, VI_globalVelocity);
        },
        slideDown: function(obj, height, velocity, onComplete) {
            var y = 1;
            var originalHeight = obj.offsetHeight;
            sliderDown = setInterval(function() {
                if (parseFloat(y).toFixed(2) == 0) {
                    obj.style.marginBottom = height * -1 + "px";
                    obj.style.opacity = 0;
                    clearInterval(sliderDown);
                    onComplete();
                }
                obj.style.marginBottom = height * y - height + "px";
                obj.style.opacity = y;
                obj.style.display = "block";
                y = parseFloat(y - .01).toFixed(2);
            }, velocity);
        },
        slideUp: function(obj, height, velocity, onComplete) {
            var y = 1;
            var originalHeight = obj.offsetHeight;
            sliderUp = setInterval(function() {
                if (parseFloat(y).toFixed(2) == 0) {
                    obj.style.marginBottom = "0px";
                    obj.style.opacity = 1;
                    clearInterval(sliderUp);
                    onComplete();
                    return;
                }
                obj.style.marginBottom = height * (1 - y) - height + "px";
                obj.style.opacity = 1 - y;
                obj.style.display = "block";
                y = parseFloat(y - .01).toFixed(2);
            }, velocity);
        },
        slideLeft: function(obj, messageDiv, textDiv, closedDiv, linkDiv, distStartSlider, distanceOut, velocity) {
            var y = 1;
            var slideLeft = setInterval(function() {
                if (y.toFixed(1) == 0) {
                    clearInterval(slideLeft);
                    VI_EC.slideOpen(obj, messageDiv, textDiv, closedDiv, linkDiv, distStartSlider, velocity);
                }
                VI_moveDiv = distanceOut * y * y * y;
                obj.style.marginLeft = VI_moveDiv - distanceOut + "px";
                obj.style.marginTop = "0px";
                obj.style.opacity = (y - 1) * -1;
                y -= .01;
            }, velocity);
        },
        slideOpen: function(obj, messageDiv, textDiv, closedDiv, linkDiv, distStartSlider, velocity) {
            if (!VI_EC.verifyIsMobile()) {
                var x = 1;
                var subSlideOpen = setInterval(function() {
                    if (x.toFixed(1) == 0) {
                        messageDiv.style.display = "none";
                        obj.onclick = function() {
                            VI_EC.slideClose(obj, messageDiv, textDiv, distStartSlider, velocity);
                        };
                        textDiv.onclick = function() {
                            VI_EC.slideClose(obj, messageDiv, textDiv, distStartSlider, velocity);
                        };
                        clearInterval(subSlideOpen);
                    }
                    VI_moveDiv = distStartSlider * x * x * x;
                    textDiv.style.marginLeft = VI_moveDiv + "px";
                    x -= .01;
                    linkDiv.style.display = "block";
                }, velocity);
            } else {
                VI_EC.fadeIn(closedDiv);
            }
        },
        slideClose: function(obj, messageDiv, textDiv, distStartSlider, velocity) {
            var x = 0;
            obj.removeAttribute("onclick");
            var subSlideClose = setInterval(function() {
                if (x >= 1) {
                    messageDiv.style.opacity = "0";
                    messageDiv.style.display = "block";
                    VI_EC.fadeIn(messageDiv);
                    clearInterval(subSlideClose);
                }
                VI_moveDiv = distStartSlider * x * x * x;
                textDiv.style.marginLeft = VI_moveDiv + "px";
                x += .01;
            }, velocity);
        },
        verifyIsMobile: function() {
            if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) return false;
            var userAgent = navigator.userAgent.toLowerCase();
            if (userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|up\.browser|up\.link|webos|wos)/i) != -1) {
                return true;
            }
        },
        addEventListener: function(elem, event, callback) {
            if (elem.addEventListener) {
                elem.addEventListener(event, callback, false);
            } else if (elem.attachEvent) {
                elem.attachEvent(event, callback);
            }
        },
        removeEventListener: function(elem, event, callback) {
            if (elem.removeEventListener) {
                elem.removeEventListener(event, callback, false);
            } else if (elem.detachEvent) {
                elem.detachEvent(event, callback);
            }
        },
        onEyeCatcherClick: function() {
            if (!VI_EC.verifyIsMobile()) {
                VI_EC.slideDown(VI_EC.getEyeCatcherDiv(), VI_EC.getEyeCatcherHeight(), 4, function() {
                    VI_API.openChat();
                });
            } else {
                VI_API.openChat();
            }
        },
        verifyIfWindowIsOpen: function() {
            if (VI_window != null && !VI_window.closed) {
                return true;
            }
            return false;
        }
    };
}();

var nomeCliente = "";

var userID = "";

try {
    var data = document.OiDatalayer;
    if (data) {
        if (data.userInfo) {
            if (data.userInfo.nomeCliente) {
                nomeCliente = unescape(data.userInfo.nomeCliente).trim();
            }
            if (data.userInfo.userID) {
                userID = unescape(data.userInfo.userID).trim();
            }
        }
    }
} catch (e) {console.log('@tonni error in datalayer', e)}

VI_API.setCustomVars([ {
    name: "nome",
    value: nomeCliente
}, {
    name: "datalayer",
    value: unescape(JSON.stringify(data)).trim()
}, {
    name: "cpf",
    value: userID
} ]);

VI_API.setChatContainer(document.getElementsByClassName("footer").length > 0 ? document.getElementsByClassName("footer")[0] : undefined);

VI_API.setBaseDomain("avi.oi.com.br/pt_BR");

VI_API.setCustomLicense("VI-88888879-16");

if (window.VI_API.getSource() == 2) {
    VI_API.setCustomLicense("VI-88888879-2");
}

VI_API.setUseMemory(true);

window.VI_API.abrirAtendimento = function() {
    window.VI_API.setSource(1);
    window.VI_API.openChat();
};

window.VI_API.abrirCancelamento = function() {
    window.VI_API.setSource(2);
    window.VI_API.openChat();
};

var vinterNode = document.createElement("div");

vinterNode.setAttribute("id", "vinter-eyecatcher");

vinterNode.setAttribute("class", "vinter-eyecatcher");

vinterNode.setAttribute("style", "background:#c72177;box-sizing:border-box;border-radius:5px 5px 0 0;bottom:0;height:40px;line-height:17px;padding:0 10px;position:fixed;right:70px;width:180px;display:none; cursor:pointer;");

vinterNode.innerHTML = '<div class="vinter-eyecatcher-inner"><span class="vinter-eyecatcher-img" style="background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQVJREFUeNrsVdERgjAMbT0GYAMYoWzgCLiBG4gTqBOgEzCCOAGOwAgdgQ3qy131gKM0YP3z3YVcobwkL6EI8YcHki7GmBzuEJj7JqWsN3ahYFtYHIA4tlzEKaLRwyOiPr9hhxpE3rzXkWMTZVF4uFqSwBcwctyn8k6edzvYugAkE6rIPD3RHMlcEqVwJUPvfjXUP82ViJBa40AvlUgju92CsdVT2c9JNBg15nhmCNJyJaKNlwX8nUsml0T0wjnEeTEOoHqT8RnZngyK0Rc1F6Cc0JbG7wpfYblfW8HUF5lYwgTkd/jc9ubB5K69h5YZorFnVBiMAlTB/0SUrc26EH/8Ei8BBgAy8HqfEJLSaQAAAABJRU5ErkJggg==);background-repeat:no-repeat;border:none;box-sizing:border-box;display:inline-block;height:24px;margin-right:15px;position:relative;top:8px;width:24px;"></span><span class="vinter-eyecatcher-text" style="box-sizing:border-box;color:#fff;font-weight:bold;font-family:Arial,sans-serif;font-size:14px;line-height:17px;">Chat Online</span></div>';

if (document.getElementsByClassName("footer").length > 0) {
    document.getElementsByClassName("footer")[0].appendChild(vinterNode);
    console.log('@tonni', document.getElementsByClassName("footer"));
}

VI_EC.setEyeCatcherDiv(vinterNode);

VI_EC.setEyeCatcherHeight(40);

if (VI_API.isValidLicense() && VI_API.hasEyeCatcher()) {
    VI_API.showEyeCatcher = function() {
        VI_EC.slideUp(VI_EC.getEyeCatcherDiv(), VI_EC.getEyeCatcherHeight(), 4, function() {});
        VI_EC.addEventListener(VI_EC.getEyeCatcherDiv(), "click", VI_EC.onEyeCatcherClick);
    };
    VI_API.hideEyeCatcher = function() {
        VI_EC.slideDown(VI_EC.getEyeCatcherDiv(), VI_EC.getEyeCatcherHeight(), 4, function() {});
        VI_EC.removeEventListener(VI_EC.getEyeCatcherDiv(), "click", VI_EC.onEyeCatcherClick);
    };
} else {
    VI_API.showEyeCatcher = function() {};
    VI_API.hideEyeCatcher = function() {};
}

if (VI_API.getLaunchType() == "redirect" && VI_API.isValidLicense()) {
    VI_API.openChat = function() {
        var leftPosition = window.innerWidth + (window.screenX - (VI_API.getWidthAVI() + 60));
        var topPosition = window.innerHeight + window.screenY - (VI_API.getHeightAVI() + 60);
        var domain = VI_API.getBaseDomain() != "" ? VI_API.getProtocol() + VI_API.getBaseDomain() + "/" : "";
        var aviurl = domain + "avi.html?id=" + VI_API.getIdAvi() + "&source=" + VI_API.getSource() + "&target=" + VI_API.getTarget() + "&channel=" + VI_API.getChannel() + VI_API.getParametersFromCustomVars();
        window.location = aviurl + "&ms=" + new Date().getTime();
    };
    VI_API.closeChat = function() {};
}

var VI_window;

if (VI_API.getLaunchType() == "popup" && VI_API.isValidLicense()) {
    console.log('@tonni POPUP::465')
    VI_API.openChat = function() {
        var leftPosition = window.innerWidth + (window.screenX - (VI_API.getWidthAVI() + 60));
        var topPosition = window.innerHeight + window.screenY - (VI_API.getHeightAVI() + 60);
        var domain = VI_API.getBaseDomain() != "" ? VI_API.getProtocol() + VI_API.getBaseDomain() + "/" : "";
        var aviurl = domain + "avi.html?id=" + VI_API.getIdAvi() + "&source=" + VI_API.getSource() + "&target=" + VI_API.getTarget() + "&channel=" + VI_API.getChannel() + VI_API.getParametersFromCustomVars();
        VI_window = window.open(aviurl + "&ms=" + new Date().getTime(), "AVI", "scrollbars=1, width=" + VI_API.getWidthAVI() + ", height=" + VI_API.getHeightAVI() + ", left=" + leftPosition + ", top=" + topPosition);
    };
    VI_API.closeChat = function() {
        VI_window.close();
    };
}

if (VI_API.getLaunchType() == "embedded" && VI_API.isValidLicense()) {
    console.log('@tonni EMBEDDED::479');
    var newDate = new Date().getTime();
    var locProtocol = "https:" == document.location.protocol ? "https://" : "http://";
    var domain = VI_API.getBaseDomain() != "" ? locProtocol + VI_API.getBaseDomain() + "/" : "";
    var vinterNode = document.createElement("div");
    vinterNode.setAttribute("id", "vinter-compact-container");
    vinterNode.setAttribute("style", "visibility:hidden; bottom:0px; max-width: 500px !important; position:fixed; right:70px; width: 90%; z-index:2147483639; box-shadow: 0px 0px 3px 1px #ccc;");
    vinterNode.innerHTML = "";
    if (VI_API.getChatContainer() != undefined) {
        VI_API.getChatContainer().appendChild(vinterNode);
        console.log()
    }
    function activated() {
        vinterNode.style.visibility = "visible";
    }
    VI_API.openChat = function() {
        var aviurl = domain + "avi.html?id=" + VI_API.getIdAvi() + "&source=" + VI_API.getSource() + "&target=" + VI_API.getTarget() + "&channel=" + VI_API.getChannel() + VI_API.getParametersFromCustomVars();
        if (vinterNode.innerHTML == "") {
            vinterNode.innerHTML = '<iframe  onload="activated()" id="vinter-avi-frame" frameborder="0" src="' + aviurl + "#forward" + window.location.search + '" name="vinter-avi" scrolling="no" allowtransparency="true" style="border:none; height: 520px !important; min-height: 0px !important; width: 100% !important;"></iframe>';
        } else {
            var iframe = document.getElementById("vinter-avi-frame");
            if (!iframe) {
                vinterNode.innerHTML = '<iframe onload="activated()" id="vinter-avi-frame" frameborder="0" src="' + aviurl + "#forward" + window.location.search + '" name="vinter-avi" scrolling="no" allowtransparency="true" style="border:none; height: 520px !important; min-height: 0px !important; width: 100% !important;"></iframe>';
            } else {
                iframe.src = aviurl;
            }
        }
        if (!VI_API.isOpen) {
            VI_EC.slideUp(vinterNode, 520, 4, function() {
                VI_API.isOpen = true;
                VI_API.setState("embeddedOpened");
            });
        }
        window.onmessage = function(e) {
            if (e.data == "onBtnWindowHideClick") {
                VI_API.closeChat();
            }
        };
    };
    VI_API.closeChat = function() {
        VI_EC.slideDown(vinterNode, 520, 4, function() {
            VI_API.isOpen = false;
            VI_API.showEyeCatcher();
            VI_API.setState("embeddedClosed");
        });
    };
}

if (VI_API.isValidLicense()) {
    console.log('@tonni VI_API RUNNING');
    var state = VI_API.shouldUseMemory() && VI_API.hasLocalStorage() ? VI_API.getState() : "closed";
    if (VI_EC.verifyIsMobile() && VI_API.hasEyeCatcher()) {
        setTimeout(VI_API.showEyeCatcher, 500);
    } else {
        if (state == "embeddedOpened") {
            VI_API.openChat();
        } else if (VI_API.hasEyeCatcher()) {
            setTimeout(VI_API.showEyeCatcher, 500);
        }
    }
}
// @tonni edit
else{
    console.log('@tonni VI_API NOT VALID');
}