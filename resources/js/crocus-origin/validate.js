const hidemsg = function() {
    Loadx.classList.contains("display-block") && Loadx.classList.remove("display-block"),
    null != document.querySelector(".search-error") && document.querySelector(".search-error").classList.remove("show"),
    null != document.querySelector(".advance-error") && document.querySelector(".advance-error").classList.remove("show"),
    null != document.querySelector(".advance-error-category") && document.querySelector(".advance-error-category").classList.remove("show")
}
    , hideerror = function() {
    document.querySelectorAll(".form-error").forEach((function(e) {
            e.remove()
        }
    ))
};
function isNumber(e) {
    var t = e.which ? e.which : e.keyCode;
    return !(46 != t && t > 31 && (t < 48 || t > 57)) || (e.returnValue = !1,
        !1)
}
function serialize(e) {
    if (e && "FORM" === e.nodeName) {
        var t, n, r = [];
        for (t = e.elements.length - 1; t >= 0; t -= 1)
            if ("" !== e.elements[t].name)
                switch (e.elements[t].nodeName) {
                    case "INPUT":
                        switch (e.elements[t].type) {
                            case "text":
                            case "tel":
                            case "email":
                            case "hidden":
                            case "password":
                            case "button":
                            case "reset":
                            case "submit":
                                r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                                break;
                            case "checkbox":
                            case "radio":
                                e.elements[t].checked && r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value))
                        }
                        break;
                    case "file":
                        break;
                    case "TEXTAREA":
                        r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                        break;
                    case "SELECT":
                        switch (e.elements[t].type) {
                            case "select-one":
                                r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                                break;
                            case "select-multiple":
                                for (n = e.elements[t].options.length - 1; n >= 0; n -= 1)
                                    e.elements[t].options[n].selected && r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].options[n].value))
                        }
                        break;
                    case "BUTTON":
                        switch (e.elements[t].type) {
                            case "reset":
                            case "submit":
                            case "button":
                                r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value))
                        }
                }
        return r.join("&")
    }
}
function checkEmail(e) {
    var t = document.getElementById(e);
    return !!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t.value.trim())
}
function checkNull(e, t, n) {
    var r = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    if ("" == r || r == n) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var o = document.createElement("div");
            o.className = "form-error";
            var c = document.createElement("div");
            c.className = "form-error-content",
                c.id = "error_" + e,
                c.innerHTML = t,
                o.appendChild(c),
                document.getElementById(e).after(o)
        }
        return document.querySelectorAll(".form-error").forEach((function(e) {
                e.addEventListener("click", (function(e) {
                        this.remove()
                    }
                ))
            }
        )),
            !1
    }
    return !0
}
function isUserNameValid(e) {
    return !!/^[a-z0-9_\.]+$/.exec(e)
}
function checkUserName(e, t, n, r) {
    var o = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    if ("" == o || o == r) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else
            (c = document.createElement("div")).className = "form-error",
                (a = document.createElement("div")).className = "form-error-content",
                a.id = "error_" + e,
                a.innerHTML = t,
                c.appendChild(a),
                document.getElementById(e).after(c);
        return document.querySelectorAll(".form-error").forEach((function(e) {
                e.addEventListener("click", (function(e) {
                        this.remove()
                    }
                ))
            }
        )),
            !1
    }
    if (0 == isUserNameValid(o)) {
        var c, a;
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = n;
        else
            (c = document.createElement("div")).className = "form-error",
                (a = document.createElement("div")).className = "form-error-content",
                a.id = "error_" + e,
                a.innerHTML = n,
                c.appendChild(a),
                document.getElementById(e).after(c);
        return document.querySelectorAll(".form-error").forEach((function(e) {
                e.addEventListener("click", (function(e) {
                        this.remove()
                    }
                ))
            }
        )),
            !1
    }
    return !0
}
function checkMail(e, t, n) {
    if (!checkEmail(e)) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var r = document.createElement("div");
            r.className = "form-error";
            var o = document.createElement("div");
            o.className = "form-error-content",
                o.id = "error_" + e,
                o.innerHTML = t,
                r.appendChild(o),
                document.getElementById(e).after(r)
        }
        return document.querySelectorAll(".form-error").forEach((function(e) {
                e.addEventListener("click", (function(e) {
                        this.remove()
                    }
                ))
            }
        )),
            !1
    }
    return !0
}
function checkSelect(e, t, n) {
    var r = null != document.getElementById(e) ? document.getElementById(e).value : "";
    if ("" == r || r == n || 0 == r || "null" == r) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var o = document.createElement("div");
            o.className = "form-error";
            var c = document.createElement("div");
            c.className = "form-error-content",
                c.id = "error_" + e,
                c.innerHTML = t,
                o.appendChild(c),
                document.getElementById(e).after(o)
        }
        return !1
    }
    return !0
}
function checkCheckbox(e, t, n) {
    var r = !1;
    if (document.querySelectorAll("." + e).forEach((function(e) {
            1 == e.checked && (r = !0)
        }
    )),
    0 == r) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var o = document.createElement("div");
            o.className = "form-error";
            var c = document.createElement("div");
            c.className = "form-error-content",
                c.id = "error_" + e,
                c.innerHTML = t,
                o.appendChild(c),
                document.querySelector(".radio-box li").after(o)
        }
        return !1
    }
    return !0
}
function CheckboxCondition(e, t, n) {
    if (document.getElementById(e) && 0 == document.getElementById(e).checked) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var r = document.createElement("div");
            r.className = "form-error";
            var o = document.createElement("div");
            o.className = "form-error-content",
                o.id = "error_" + e,
                o.innerHTML = t,
                r.appendChild(o),
                document.getElementById(e).parentElement.after(r)
        }
        return !1
    }
    return !0
}
document.querySelector(".search-error") && document.querySelector(".search-error").addEventListener("click", (function(e) {
        this.classList.remove("show")
    }
)),
document.querySelector(".advance-error") && document.querySelector(".advance-error").addEventListener("click", (function(e) {
        this.classList.remove("show")
    }
)),
document.querySelector(".advance-error-category") && document.querySelector(".advance-error-category").addEventListener("click", (function(e) {
        this.classList.remove("show")
    }
));
const checkPass = function(e) {
    var t = document.getElementById(e)
        , n = t.nextElementSibling
        , r = document.querySelector(".mess-pass")
        , o = document.querySelector(".letter")
        , c = document.querySelector(".capital")
        , a = document.querySelector(".number")
        , i = document.querySelector(".length")
        , d = /[a-z]/g
        , s = /[A-Z]/g
        , l = /[0-9]/g;
    function u(e) {
        e.value.length >= 8 && (e.value.match(d) && (o.classList.remove("invalid"),
            o.classList.add("valid")),
        e.value.match(s) && (c.classList.remove("invalid"),
            c.classList.add("valid")),
        e.value.match(l) && (a.classList.remove("invalid"),
            a.classList.add("valid")),
            i.classList.remove("invalid"),
            i.classList.add("valid"),
            r.classList.add("display-none"))
    }
    u(t);
    var m = function() {
        document.querySelectorAll(".invalid").length > 0 ? r.classList.remove("display-none") : r.classList.add("display-none")
    };
    t.onfocus = function() {
        m(),
            u(t)
    }
        ,
        t.onblur = function() {
            m(),
                u(t)
        }
        ,
        r.addEventListener("click", (function(e) {
                e.preventDefault(),
                    this.classList.add("display-none"),
                    this.classList.remove("show"),
                    u(t)
            }
        )),
        t.onkeyup = function() {
            t.value.match(d) ? (o.classList.remove("invalid"),
                o.classList.add("valid")) : (o.classList.remove("valid"),
                o.classList.add("invalid")),
                t.value.match(s) ? (c.classList.remove("invalid"),
                    c.classList.add("valid")) : (c.classList.remove("valid"),
                    c.classList.add("invalid")),
                t.value.match(l) ? (a.classList.remove("invalid"),
                    a.classList.add("valid")) : (a.classList.remove("valid"),
                    a.classList.add("invalid")),
                t.value.length >= 8 ? (i.classList.remove("invalid"),
                    i.classList.add("valid")) : (i.classList.remove("valid"),
                    i.classList.add("invalid"))
        }
        ,
        n.addEventListener("click", (function(e) {
                e.preventDefault(),
                    u(t)
            }
        ))
};
function checkPhone(e, t, n) {
    var r = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    if ("" == r || r == n || r.length < 10 || r.length > 11) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var o = document.createElement("div");
            o.className = "form-error";
            var c = document.createElement("div");
            c.className = "form-error-content",
                c.id = "error_" + e,
                c.innerHTML = t,
                o.appendChild(c),
                document.getElementById(e).after(o)
        }
        return document.querySelectorAll(".form-error").forEach((function(e) {
                e.addEventListener("click", (function(e) {
                        this.remove()
                    }
                ))
            }
        )),
            !1
    }
    return !0
}
function resetForm() {
    document.querySelectorAll(".alert").forEach((function(e) {
            e.remove()
        }
    )),
    overlayDark.classList.contains("show") && overlayDark.classList.remove("show")
}
var formatUsername = function(e) {
    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")).replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")).replace(/ì|í|ị|ỉ|ĩ/g, "i")).replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")).replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")).replace(/đ/g, "d")).replace(/Đ/g, "D")).replace(/[^A-Za-z0-9\-_]/g, "")
};
if (null != document.getElementById("formSubscrible")) {
    function validateSubscribe() {
        var e = !0;
        return checkMail("emailsubscribe", document.getElementById("emailsubscribe").getAttribute("data-error"), document.getElementById("emailsubscribe").getAttribute("data-default")) || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    function resetSubscribe() {
        document.getElementById("formSubscrible").reset(),
            document.querySelectorAll(".alert").forEach((function(e) {
                    e.remove()
                }
            )),
            document.querySelectorAll("#formSubscrible .holder").forEach((function(e) {
                    e.classList.remove("hide")
                }
            )),
            overlayDark.classList.remove("show")
    }
    document.getElementById("subscrible-submit").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateSubscribe()) {
                document.getElementById("subscrible-submit").setAttribute("disabled", "disabled"),
                    document.getElementById("subscrible-submit").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , r = serialize(document.forms.formSubscrible);
                n.open("POST", t + "/SubscribeEmail/SendEmailSubscribe", !0),
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.onreadystatechange = function() {
                        if (n.readyState === XMLHttpRequest.DONE && 200 === n.status) {
                            Loadx.classList.remove("display-block");
                            var e = JSON.parse(n.responseText);
                            if (1 == e.result) {
                                if ("vi" == HTML.lang)
                                    var t = "<strong>Chân thành cảm ơn Quý khách hàng</strong><br>đã đăng ký nhận thông tin từ <strong>Crocus Origin</strong>.<br>Chúng tôi đã tiếp nhận thông tin của bạn và sẽ phản hồi trong thời gian sớm nhất.";
                                else
                                    t = "<strong>Thank you very much<strong><br>for registering to receive information from <strong>Crocus Origin</strong>.<br>We have received your information and will respond as soon as possible.";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert success",
                                        (c = document.createElement("div")).className = "success-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".success").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetSubscribe()
                                        }
                                    ), 5e3),
                                    document.querySelector(".success").addEventListener("click", (function(e) {
                                            resetSubscribe()
                                        }
                                    ))
                            } else {
                                if (2 == e.result) {
                                    var r = document.getElementById("emailsubscribe").value;
                                    if ("vi" == HTML.lang)
                                        t = "Email <strong>" + r + "</strong> đã được đăng ký!";
                                    else
                                        t = "This email <strong>" + r + "</strong> is already!";
                                    if (!document.querySelector(".warning"))
                                        (o = document.createElement("div")).className = "alert warning",
                                            (c = document.createElement("div")).className = "warning-content",
                                            c.innerHTML = t,
                                            o.appendChild(c),
                                            document.body.appendChild(o);
                                    setTimeout((function() {
                                            document.querySelector(".warning").classList.add("show")
                                        }
                                    ), 200),
                                        setTimeout((function() {
                                                resetSubscribe()
                                            }
                                        ), 3e3),
                                        document.querySelector(".warning").addEventListener("click", (function(e) {
                                                resetSubscribe()
                                            }
                                        ))
                                }
                                if (3 == e.result) {
                                    var o, c;
                                    r = document.getElementById("emailsubscribe").value;
                                    if ("vi" == HTML.lang)
                                        t = 'Hệ thống không nhận được email "<strong>' + r + '</strong>" của bạn!';
                                    else
                                        t = 'The system did not receive your email "<strong>' + r + '</strong>"!';
                                    if (!document.querySelector(".warning"))
                                        (o = document.createElement("div")).className = "alert warning",
                                            (c = document.createElement("div")).className = "warning-content",
                                            c.innerHTML = t,
                                            o.appendChild(c),
                                            document.body.appendChild(o);
                                    setTimeout((function() {
                                            document.querySelector(".warning").classList.add("show")
                                        }
                                    ), 200),
                                        setTimeout((function() {
                                                resetSubscribe()
                                            }
                                        ), 3e3),
                                        document.querySelector(".warning").addEventListener("click", (function(e) {
                                                resetSubscribe()
                                            }
                                        ))
                                }
                            }
                            document.getElementById("subscrible-submit").removeAttribute("disabled"),
                                document.getElementById("subscrible-submit").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    n.send(r)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("formSubscrible").addEventListener("keydown", (function(e) {
                return 13 === e.keyCode && (e.preventDefault(),
                    document.getElementById("subscrible-submit").click()),
                    !1
            }
        ))
}
if (null != document.getElementById("contactForm")) {
    function validateContact() {
        var e = !0
            , t = checkMail("emailcontact", document.getElementById("emailcontact").getAttribute("data-error"), document.getElementById("emailcontact").getAttribute("data-default"))
            , n = checkNull("namecontact", document.getElementById("namecontact").getAttribute("data-error"), document.getElementById("namecontact").getAttribute("data-default"))
            , r = checkPhone("phonecontact", document.getElementById("phonecontact").getAttribute("data-error"), document.getElementById("phonecontact").getAttribute("data-default"));
        return n && r && t || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    document.getElementById("contact-submit").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateContact()) {
                document.getElementById("contact-submit").setAttribute("disabled", "disabled"),
                    document.getElementById("contact-submit").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#contact-submit").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , o = serialize(document.forms.contactForm);
                r.open("POST", t + "/Contact/InsertContactInformation", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (200 == r.status && "" != r.responseText) {
                            var e = JSON.parse(r.responseText);
                            if (Loadx.classList.remove("display-block"),
                            1 == e.result)
                                window.location = n;
                            else if (3 == e.result) {
                                if ("vi" == HTML.lang)
                                    var t = "Email này đã được đăng ký!";
                                else
                                    t = "This email is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (4 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Số điện thoại này đã được đăng ký!";
                                else
                                    t = "This phone number is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else {
                                if ("vi" == HTML.lang)
                                    t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                var o, c;
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("contact-submit").removeAttribute("disabled"),
                                document.getElementById("contact-submit").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
    null != document.getElementById("phonecontact") && document.getElementById("phonecontact").addEventListener("keypress", isNumber),
        document.getElementById("contactForm").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("contact-submit").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("commentForm")) {
    function validateComment() {
        var e = !0
            , t = checkMail("emailcomment", document.getElementById("emailcomment").getAttribute("data-error"), document.getElementById("emailcomment").getAttribute("data-default"));
        return checkNull("namecomment", document.getElementById("namecomment").getAttribute("data-error"), document.getElementById("namecomment").getAttribute("data-default")) && t || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    document.getElementById("comment-submit").addEventListener("click", (function(e) {
            if (e.preventDefault(),
                document.querySelector(".btn-login-product"))
                return document.querySelector(".comment-message-notification").classList.add("show"),
                    setTimeout((function() {
                            document.querySelector(".comment-message-notification").classList.remove("show")
                        }
                    ), 1500),
                    !1;
            if (document.querySelector(".btn-check-buy-product"))
                return document.querySelector(".message-buy-product-notification").classList.add("show"),
                    setTimeout((function() {
                            document.querySelector(".message-buy-product-notification").classList.remove("show")
                        }
                    ), 1500),
                    !1;
            if (1 == validateComment()) {
                document.getElementById("comment-submit").setAttribute("disabled", "disabled"),
                    document.getElementById("comment-submit").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#comment-submit").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , o = serialize(document.forms.commentForm);
                r.open("POST", t + "/Product/InsertProductReviews", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (r.readyState === XMLHttpRequest.DONE && 200 === r.status) {
                            var e = JSON.parse(r.responseText);
                            if (Loadx.classList.remove("display-block"),
                            1 == e.result)
                                localStorage.removeItem("shoppingCart"),
                                    window.location = n;
                            else {
                                if ("vi" == HTML.lang)
                                    var t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                if (!document.querySelector(".warning")) {
                                    var o = document.createElement("div");
                                    o.className = "alert warning";
                                    var c = document.createElement("div");
                                    c.className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o)
                                }
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("comment-submit").removeAttribute("disabled"),
                                document.getElementById("comment-submit").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("commentForm").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("comment-submit").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("commentFormSupplier")) {
    function validateComment() {
        var e = !0
            , t = checkMail("emailcommentSupplier", document.getElementById("emailcommentSupplier").getAttribute("data-error"), document.getElementById("emailcommentSupplier").getAttribute("data-default"));
        return checkNull("namecommentSupplier", document.getElementById("namecommentSupplier").getAttribute("data-error"), document.getElementById("namecommentSupplier").getAttribute("data-default")) && t || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    document.getElementById("comment-submit-supplier").addEventListener("click", (function(e) {
            if (e.preventDefault(),
                document.querySelector(".btn-login-product"))
                return document.querySelector(".comment-message-notification-supplier").classList.add("show"),
                    setTimeout((function() {
                            document.querySelector(".comment-message-notification-supplier").classList.remove("show")
                        }
                    ), 1500),
                    !1;
            if (1 == validateComment()) {
                document.getElementById("comment-submit-supplier").setAttribute("disabled", "disabled"),
                    document.getElementById("comment-submit-supplier").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#comment-submit-supplier").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , o = serialize(document.forms.commentFormSupplier);
                r.open("POST", t + "/Product/InsertSupplierReview", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (r.readyState === XMLHttpRequest.DONE && 200 === r.status) {
                            var e = JSON.parse(r.responseText);
                            if (Loadx.classList.remove("display-block"),
                            1 == e.result)
                                localStorage.removeItem("shoppingCart"),
                                    window.location = n;
                            else {
                                if ("vi" == HTML.lang)
                                    var t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                if (!document.querySelector(".warning")) {
                                    var o = document.createElement("div");
                                    o.className = "alert warning";
                                    var c = document.createElement("div");
                                    c.className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o)
                                }
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("comment-submit-supplier").removeAttribute("disabled"),
                                document.getElementById("comment-submit-supplier").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("commentFormSupplier").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("comment-submit-supplier").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("register-page")) {
    var Checkpass = new checkPass("cus_password");
    function validateRegistInfo() {
        var e = !0
            , t = checkMail("Email", document.getElementById("Email").getAttribute("data-error"), document.getElementById("Email").getAttribute("data-default"))
            , n = checkNull("FullName", document.getElementById("FullName").getAttribute("data-error"), document.getElementById("FullName").getAttribute("data-default"))
            , r = checkPhone("Phone", document.getElementById("Phone").getAttribute("data-error"), document.getElementById("Phone").getAttribute("data-default"))
            , o = checkSelect("center-province", document.getElementById("center-province").getAttribute("data-error"), document.getElementById("center-province").getAttribute("data-default"))
            , c = checkSelect("center-district", document.getElementById("center-district").getAttribute("data-error"), document.getElementById("center-district").getAttribute("data-default"))
            , a = checkSelect("wards", document.getElementById("wards").getAttribute("data-error"), document.getElementById("wards").getAttribute("data-default"))
            , i = checkNull("Address", document.getElementById("Address").getAttribute("data-error"), document.getElementById("Address").getAttribute("data-default"))
            , d = checkNull("cus_username", document.getElementById("cus_username").getAttribute("data-error"), document.getElementById("cus_username").getAttribute("data-default"))
            , s = checkNull("cus_password", document.getElementById("cus_password").getAttribute("data-error"), document.getElementById("cus_password").getAttribute("data-default"))
            , l = CheckboxCondition("agree", document.getElementById("agree").getAttribute("data-error"), document.getElementById("agree").getAttribute("data-default"));
        if (!(n && r && t && o && c && a && i && d && s && l) && (e = !1,
            document.querySelector(".form-error"))) {
            document.querySelector("#registInfo > .form-content").addEventListener("click", (function(e) {
                    e.preventDefault(),
                        hideerror()
                }
            ));
            var u = document.querySelector(".form-error").parentNode.offsetTop;
            ScrollTop(u)
        }
        return 1 == s && document.querySelectorAll(".invalid").length > 0 && document.querySelector(".mess-pass").classList.add("show"),
            e
    }
    document.getElementById("btnRegister").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateRegistInfo() && 0 == document.querySelectorAll(".invalid").length) {
                document.getElementById("btnRegister").setAttribute("disabled", "disabled"),
                    document.getElementById("btnRegister").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#btnRegister").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , o = serialize(document.forms["regist-info"]);
                r.open("POST", t + "/AccountMember/RegisterMember", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (200 == r.status && "" != r.responseText) {
                            var e = JSON.parse(r.responseText);
                            if (Loadx.classList.remove("display-block"),
                            1 == e.result)
                                window.location = n;
                            else if (2 == e.result) {
                                if ("vi" == HTML.lang)
                                    var t = "Tài khoản này đã được đăng ký!";
                                else
                                    t = "This account is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (3 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Email này đã được đăng ký!";
                                else
                                    t = "This email is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (4 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Số điện thoại này đã được đăng ký!";
                                else
                                    t = "This phone number is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (8 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Mật khẩu nhập vào lớn hơn hoặc bằng 8 ký tự và nhỏ hơn hoặc bằng 20 ký tự!";
                                else
                                    t = "The password entered is 8 characters or more and less than or equal to 20 characters!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (11 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Tên đăng nhập phải theo định dạng: chữ viết liền không dấu, không chứa ký tự đặc biệt, không chứa khoảng trắng.!";
                                else
                                    t = "Username must follow the format: unsigned letters, no special characters, no spaces.!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 5e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else {
                                if ("vi" == HTML.lang)
                                    t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                var o, c;
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("btnRegister").removeAttribute("disabled"),
                                document.getElementById("btnRegister").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
    null != document.getElementById("Phone") && document.getElementById("Phone").addEventListener("keypress", isNumber),
        document.getElementById("registInfo").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btnRegister").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("formLogin")) {
    function validateformLogin() {
        var e = !0
            , t = checkNull("loginName", document.getElementById("loginName").getAttribute("data-error"), document.getElementById("loginName").getAttribute("data-default"))
            , n = checkNull("loginPass", document.getElementById("loginPass").getAttribute("data-error"), document.getElementById("loginPass").getAttribute("data-default"));
        return t && n || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    document.getElementById("loginBut").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateformLogin()) {
                document.getElementById("loginBut").setAttribute("disabled", "disabled"),
                    document.getElementById("loginBut").style.pointerEvents = "none";
                var t = getDirect
                    , n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , r = serialize(document.forms.loginform);
                n.open("POST", t + "/AccountMember/LoginMember", !0),
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.onreadystatechange = function() {
                        if (200 == n.status && "" != n.responseText) {
                            var e = JSON.parse(n.responseText);
                            if (1 == e.result)
                                window.location = e.UrlReference;
                            else if (2 == e.result) {
                                if ("vi" == HTML.lang)
                                    var t = "Tài khoản này đang bị khóa!";
                                else
                                    t = "This account is locked!";
                                if (!loginBox.querySelector(".warning"))
                                    (r = document.createElement("div")).className = "alert warning",
                                        (o = document.createElement("div")).className = "warning-content",
                                        o.innerHTML = t,
                                        r.appendChild(o),
                                        loginBox.appendChild(r);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    loginBox.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (0 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Thông tin không hợp lệ.";
                                else
                                    t = "Invalid information.";
                                if (!loginBox.querySelector(".warning"))
                                    (r = document.createElement("div")).className = "alert warning",
                                        (o = document.createElement("div")).className = "warning-content",
                                        o.innerHTML = t,
                                        r.appendChild(o),
                                        loginBox.appendChild(r);
                                setTimeout((function() {
                                        loginBox.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    loginBox.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else {
                                if ("vi" == HTML.lang)
                                    t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                var r, o;
                                if (!loginBox.querySelector(".warning"))
                                    (r = document.createElement("div")).className = "alert warning",
                                        (o = document.createElement("div")).className = "warning-content",
                                        o.innerHTML = t,
                                        r.appendChild(o),
                                        loginBox.appendChild(r);
                                setTimeout((function() {
                                        loginBox.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    loginBox.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("loginBut").removeAttribute("disabled"),
                                document.getElementById("loginBut").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    n.send(r)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("formLogin").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("loginBut").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("formForget")) {
    function validateForgotPassword() {
        var e = !0;
        return checkMail("emailforget", document.getElementById("emailforget").getAttribute("data-error"), document.getElementById("emailforget").getAttribute("data-default")) || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    function resetForgotPassword() {
        document.getElementById("formForget").reset(),
            document.querySelectorAll(".alert").forEach((function(e) {
                    e.remove()
                }
            )),
            document.querySelectorAll("#formForget .holder").forEach((function(e) {
                    e.classList.remove("hide")
                }
            )),
            overlayDark.classList.remove("show")
    }
    document.getElementById("btn-forget-password").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateForgotPassword()) {
                document.getElementById("btn-forget-password").setAttribute("disabled", "disabled"),
                    document.getElementById("btn-forget-password").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , r = serialize(document.forms.formForget);
                n.open("POST", t + "/AccountMember/ForgotPassword", !0),
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.onreadystatechange = function() {
                        if (n.readyState === XMLHttpRequest.DONE && 200 === n.status) {
                            Loadx.classList.remove("display-block");
                            var e = JSON.parse(n.responseText);
                            if (1 == e.result) {
                                if ("vi" == HTML.lang)
                                    var t = "<strong>Gửi thông tin lấy lại mật khẩu thành công</strong><br>Chúng tôi đã gửi thông tin thay đổi mật khẩu tới email <strong> " + document.getElementById("emailforget").value + " </strong>.<br>Hãy kiểm tra email để xem lại thông tin đăng nhập của bạn.";
                                else
                                    t = "<strong>Send information to retrieve password successfully</strong><br>We have sent password change information to email <strong> " + document.getElementById("emailforget").value + " </strong>.<br>Please check your email to review your login information.";
                                if (!document.querySelector(".success"))
                                    (r = document.createElement("div")).className = "alert success",
                                        (o = document.createElement("div")).className = "success-content",
                                        o.innerHTML = t,
                                        r.appendChild(o),
                                        document.body.appendChild(r);
                                document.querySelector(".close-login").click(),
                                    setTimeout((function() {
                                            document.querySelector(".success").classList.add("show")
                                        }
                                    ), 200),
                                    setTimeout((function() {
                                            resetForgotPassword()
                                        }
                                    ), 1e4),
                                    document.querySelector(".success").addEventListener("click", (function(e) {
                                            resetForgotPassword()
                                        }
                                    ))
                            } else {
                                if (2 == e.result) {
                                    if ("vi" == HTML.lang)
                                        t = "Thông tin không hợp lệ.";
                                    else
                                        t = "Invalid information.";
                                    if (!loginBox.querySelector(".warning"))
                                        (r = document.createElement("div")).className = "alert warning",
                                            (o = document.createElement("div")).className = "warning-content",
                                            o.innerHTML = t,
                                            r.appendChild(o),
                                            loginBox.appendChild(r);
                                    setTimeout((function() {
                                            loginBox.querySelector(".warning").classList.add("show")
                                        }
                                    ), 200),
                                        setTimeout((function() {
                                                resetSubscribe()
                                            }
                                        ), 3e3),
                                        loginBox.querySelector(".warning").addEventListener("click", (function(e) {
                                                resetSubscribe()
                                            }
                                        ))
                                }
                                if (3 == e.result) {
                                    var r, o, c = document.getElementById("emailforget").value;
                                    if ("vi" == HTML.lang)
                                        t = 'Hệ thống không nhận được email "<strong>' + c + '</strong>" của bạn!';
                                    else
                                        t = 'The system did not receive your email "<strong>' + c + '</strong>"!';
                                    if (!loginBox.querySelector(".warning"))
                                        (r = document.createElement("div")).className = "alert warning",
                                            (o = document.createElement("div")).className = "warning-content",
                                            o.innerHTML = t,
                                            r.appendChild(o),
                                            loginBox.appendChild(r);
                                    setTimeout((function() {
                                            loginBox.querySelector(".warning").classList.add("show")
                                        }
                                    ), 200),
                                        setTimeout((function() {
                                                resetSubscribe()
                                            }
                                        ), 3e3),
                                        loginBox.querySelector(".warning").addEventListener("click", (function(e) {
                                                resetSubscribe()
                                            }
                                        ))
                                }
                            }
                            document.getElementById("btn-forget-password").removeAttribute("disabled"),
                                document.getElementById("btn-forget-password").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    n.send(r)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("formForget").addEventListener("keydown", (function(e) {
                return 13 === e.keyCode && (e.preventDefault(),
                    document.getElementById("btn-forget-password").click()),
                    !1
            }
        ))
}
if (null != document.getElementById("passChange")) {
    Checkpass = new checkPass("new_pass");
    function validatePassChange() {
        var e = !0
            , t = checkNull("current_pass", document.getElementById("current_pass").getAttribute("data-error"), document.getElementById("current_pass").getAttribute("data-default"))
            , n = checkNull("new_pass", document.getElementById("new_pass").getAttribute("data-error"), document.getElementById("new_pass").getAttribute("data-default"))
            , r = checkNull("retype_pass", document.getElementById("retype_pass").getAttribute("data-error"), document.getElementById("retype_pass").getAttribute("data-default"));
        return t && n && r || (e = !1,
            setTimeout(hideerror, 2e3)),
        1 == n && document.querySelectorAll(".invalid").length > 0 && document.querySelector(".mess-pass").classList.add("show"),
            e
    }
    function resetForgotPassword() {
        document.querySelectorAll(".alert").forEach((function(e) {
                e.remove()
            }
        )),
            document.querySelectorAll(".form-error").forEach((function(e) {
                    e.remove()
                }
            ))
    }
    document.getElementById("btnChange").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validatePassChange() && 0 == document.querySelectorAll(".invalid").length) {
                document.getElementById("btnChange").setAttribute("disabled", "disabled"),
                    document.getElementById("btnChange").style.pointerEvents = "none",
                    Loadx.classList.add("display-block");
                var t = getDirect
                    , n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , r = serialize(document.forms.passChange);
                n.open("POST", t + "AccountMember/ChangePasswordMember", !0),
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.onreadystatechange = function() {
                        if (n.readyState === XMLHttpRequest.DONE && 200 === n.status) {
                            Loadx.classList.remove("display-block");
                            var e = n.responseText;
                            if ("1" == e) {
                                if ("vi" == HTML.lang)
                                    var t = "<strong>Đổi mật khẩu thành công!</strong><br>";
                                else
                                    t = "<strong>Change password successfully!</strong><br>";
                                if (!document.querySelector(".success")) {
                                    var r = document.createElement("div");
                                    r.className = "alert success",
                                        (c = document.createElement("div")).className = "success-content",
                                        c.innerHTML = t,
                                        r.appendChild(c),
                                        document.body.appendChild(r)
                                }
                                document.querySelector(".close-login").click(),
                                    setTimeout((function() {
                                            document.querySelector(".success").classList.add("show")
                                        }
                                    ), 200),
                                    setTimeout((function() {
                                            resetForgotPassword()
                                        }
                                    ), 3e3),
                                    document.querySelector(".success").addEventListener("click", (function(e) {
                                            resetForgotPassword()
                                        }
                                    )),
                                    setTimeout((function() {
                                            document.querySelector(".password-form .close").click()
                                        }
                                    ), 4e3)
                            } else {
                                if ("4" == e) {
                                    if ("vi" == HTML.lang)
                                        t = "Mật khẩu lập lại không khớp!";
                                    else
                                        t = "Repeat password do not match!";
                                    (o = document.createElement("div")).className = "form-error",
                                        (c = document.createElement("div")).className = "form-error-content",
                                        c.id = "error_new_pass",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.getElementById("new_pass").after(o),
                                        setTimeout((function() {
                                                resetForgotPassword()
                                            }
                                        ), 3e3)
                                }
                                if ("7" == e) {
                                    if ("vi" == HTML.lang)
                                        t = "Mật khẩu cũ không chính xác!";
                                    else
                                        t = "Old password is incorrect!";
                                    var o, c;
                                    (o = document.createElement("div")).className = "form-error",
                                        (c = document.createElement("div")).className = "form-error-content",
                                        c.id = "error_current_pass",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.getElementById("current_pass").after(o),
                                        setTimeout((function() {
                                                resetForgotPassword()
                                            }
                                        ), 3e3)
                                }
                            }
                            document.getElementById("btnChange").removeAttribute("disabled"),
                                document.getElementById("btnChange").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    n.send(r)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("passChange").addEventListener("keydown", (function(e) {
                return 13 === e.keyCode && (e.preventDefault(),
                    document.getElementById("btnChange").click()),
                    !1
            }
        ))
}
if (null != document.getElementById("cart-page") && null != document.getElementById("registInfo")) {
    function validateCartInfo() {
        var e = !0
            , t = checkNull("FullName", document.getElementById("FullName").getAttribute("data-error"), document.getElementById("FullName").getAttribute("data-default"))
            , n = checkPhone("Phone", document.getElementById("Phone").getAttribute("data-error"), document.getElementById("Phone").getAttribute("data-default"))
            , r = checkMail("Email", document.getElementById("Email").getAttribute("data-error"), document.getElementById("Email").getAttribute("data-default"))
            , o = checkSelect("center-province", document.getElementById("center-province").getAttribute("data-error"), document.getElementById("center-province").getAttribute("data-default"))
            , c = checkSelect("center-district", document.getElementById("center-district").getAttribute("data-error"), document.getElementById("center-district").getAttribute("data-default"))
            , a = checkSelect("wards", document.getElementById("wards").getAttribute("data-error"), document.getElementById("wards").getAttribute("data-default"))
            , i = checkNull("Address", document.getElementById("Address").getAttribute("data-error"), document.getElementById("Address").getAttribute("data-default"))
            , d = CheckboxCondition("agree", document.getElementById("agree").getAttribute("data-error"), document.getElementById("agree").getAttribute("data-default"));
        if (!(t && n && r && o && c && a && i && d) && (e = !1,
            document.querySelector(".form-error"))) {
            var s = document.querySelector(".form-error").parentNode.offsetTop;
            ScrollTop(s),
                document.querySelector("#registInfo .form-content").addEventListener("click", (function(e) {
                        e.preventDefault(),
                            hideerror()
                    }
                ))
        }
        return e
    }
    document.getElementById("btnConfirm") && document.getElementById("btnConfirm").addEventListener("click", (function(e) {
            if (e.preventDefault(),
                document.querySelector(".btn-confirm-info"))
                return document.querySelector(".cart-message-notification").classList.add("show"),
                    setTimeout((function() {
                            document.querySelector(".cart-message-notification").classList.remove("show")
                        }
                    ), 1500),
                    !1;
            if (1 == validateCartInfo()) {
                document.getElementById("btnConfirm").setAttribute("disabled", "disabled"),
                    document.getElementById("btnConfirm").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#btnConfirm").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                document.getElementById("hdShoppingCart").value = localStorage.getItem("shoppingCart");
                var o = serialize(document.forms.registInfo);
                r.open("POST", t + "/Cart/AddOrder", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (r.readyState === XMLHttpRequest.DONE && 200 === r.status) {
                            var e = r.responseText;
                            if (Loadx.classList.remove("display-block"),
                            "1" == e)
                                localStorage.removeItem("shoppingCart"),
                                    window.location = n;
                            else {
                                if ("vi" == HTML.lang)
                                    var t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                if (!document.querySelector(".warning")) {
                                    var o = document.createElement("div");
                                    o.className = "alert warning";
                                    var c = document.createElement("div");
                                    c.className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o)
                                }
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("btnConfirm").removeAttribute("disabled"),
                                document.getElementById("btnConfirm").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("registInfo").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btnConfirm").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("registInfoAndOrder")) {
    Checkpass = new checkPass("cus_password");
    function validateregistInfoAndOrder() {
        var e = !0
            , t = checkMail("Email", document.getElementById("Email").getAttribute("data-error"), document.getElementById("Email").getAttribute("data-default"))
            , n = checkNull("FullName", document.getElementById("FullName").getAttribute("data-error"), document.getElementById("FullName").getAttribute("data-default"))
            , r = checkPhone("Phone", document.getElementById("Phone").getAttribute("data-error"), document.getElementById("Phone").getAttribute("data-default"))
            , o = checkSelect("center-province", document.getElementById("center-province").getAttribute("data-error"), document.getElementById("center-province").getAttribute("data-default"))
            , c = checkSelect("center-district", document.getElementById("center-district").getAttribute("data-error"), document.getElementById("center-district").getAttribute("data-default"))
            , a = checkSelect("wards", document.getElementById("wards").getAttribute("data-error"), document.getElementById("wards").getAttribute("data-default"))
            , i = checkNull("Address", document.getElementById("Address").getAttribute("data-error"), document.getElementById("Address").getAttribute("data-default"))
            , d = checkNull("cus_username", document.getElementById("cus_username").getAttribute("data-error"), document.getElementById("cus_username").getAttribute("data-default"))
            , s = checkNull("cus_password", document.getElementById("cus_password").getAttribute("data-error"), document.getElementById("cus_password").getAttribute("data-default"))
            , l = CheckboxCondition("agree", document.getElementById("agree").getAttribute("data-error"), document.getElementById("agree").getAttribute("data-default"));
        if (!(n && r && t && o && c && a && i && d && s && l) && (e = !1,
            document.querySelector(".form-content .form-error"))) {
            var u = document.querySelector(".append-cart").offsetHeight + window.innerHeight / 2
                , m = document.querySelector(".form-error").parentNode.parentNode.offsetTop + u;
            ScrollTop(m),
                document.querySelector("#registInfoAndOrder .form-content").addEventListener("click", (function(e) {
                        e.preventDefault(),
                            hideerror()
                    }
                ))
        }
        return 1 == s && document.querySelectorAll(".invalid").length > 0 && document.querySelector(".mess-pass").classList.add("show"),
            e
    }
    document.getElementById("btnAddOrderAndRegister") && document.getElementById("btnAddOrderAndRegister").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateregistInfoAndOrder() && 0 == document.querySelectorAll(".invalid").length) {
                document.getElementById("btnAddOrderAndRegister").setAttribute("disabled", "disabled"),
                    document.getElementById("btnAddOrderAndRegister").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#btnAddOrderAndRegister").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                document.getElementById("hdShoppingCart").value = localStorage.getItem("shoppingCart");
                var o = serialize(document.forms.registInfoAndOrder);
                r.open("POST", t + "/Cart/AddOrderAndRegister", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (r.readyState === XMLHttpRequest.DONE && 200 === r.status) {
                            var e = r.responseText;
                            if (Loadx.classList.remove("display-block"),
                            "1" == e)
                                localStorage.removeItem("shoppingCart"),
                                    window.location = n;
                            else if ("10" == e) {
                                if ("vi" == HTML.lang)
                                    var t = "Tài khoản này đã được đăng ký!";
                                else
                                    t = "This account is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if ("11" == e) {
                                if ("vi" == HTML.lang)
                                    t = "Email này đã được đăng ký!";
                                else
                                    t = "This email is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if ("12" == e) {
                                if ("vi" == HTML.lang)
                                    t = "Số điện thoại này đã được đăng ký!";
                                else
                                    t = "This phone number is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if ("13" == e) {
                                if ("vi" == HTML.lang)
                                    t = "Tên đăng nhập phải theo định dạng: chữ viết liền không dấu, không chứa ký tự đặc biệt, không chứa khoảng trắng.!";
                                else
                                    t = "Username must follow the format: unsigned letters, no special characters, no spaces.!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 5e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if ("8" == e) {
                                if ("vi" == HTML.lang)
                                    t = "Mật khẩu nhập vào lớn hơn hoặc bằng 8 ký tự và nhỏ hơn hoặc bằng 20 ký tự!";
                                else
                                    t = "The password entered is 8 characters or more and less than or equal to 20 characters!";
                                (o = document.createElement("div")).className = "alert warning",
                                    (c = document.createElement("div")).className = "warning-content",
                                    c.innerHTML = t,
                                    o.appendChild(c),
                                    document.body.appendChild(o),
                                    setTimeout((function() {
                                            document.querySelector(".warning").classList.add("show")
                                        }
                                    ), 500),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 4e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else {
                                if ("vi" == HTML.lang)
                                    t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                var o, c;
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("btnAddOrderAndRegister").removeAttribute("disabled"),
                                document.getElementById("btnAddOrderAndRegister").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
    null != document.getElementById("Phone") && document.getElementById("Phone").addEventListener("keypress", isNumber),
        document.getElementById("registInfoAndOrder").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btnAddOrderAndRegister").click(),
                    !1
            }
        ))
}
export {hidemsg, hideerror, checkNull, checkUserName, checkMail, checkPhone, checkPass};
