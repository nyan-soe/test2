(()=>{function e(){if(0!=arguments.length){var e,t,a,i,n=Array.prototype.slice.call(arguments),o=n.shift();if("undefined"==typeof actions&&(actions={}),void 0!==actions[o])for(e=0,t=100;e<=t;e++)if(actions[o][e])for(a=0,i=actions[o][e].length;a<i;a++){var r=actions[o][e][a];window[r](n)}}}function t(e){(e=jQuery)(".wpte-toggle-item:not(.active) .wpte-toggle-content").hide(),e(document).on("click",".wpte-toggle-title a",(function(){e(this).parents(".wpte-toggle-item").toggleClass("active"),e(this).parents(".wpte-toggle-title").siblings(".wpte-toggle-content").stop(!0,!1,!0).slideToggle()})),e(document).on("click",".wpte-onoff-block:not(.wpte-floated) .wpte-onoff-toggle",(function(){e(this).toggleClass("active"),e(this).siblings(".wpte-onoff-popup").stop(!0,!1,!0).slideToggle()})),e(document).on("click",".wpte-onoff-block.wpte-floated .wpte-onoff-toggle",(function(){return e(this).toggleClass("active"),e(this).siblings(".wpte-onoff-popup").fadeToggle(),!1})),e(document).on("click",".wpte-settings .wpte-repeater-block .wpte-system-btns .wpte-toggle-btn",(function(){e(this).parents(".wpte-repeater-block").toggleClass("wpte-disabled")})),e(document).on("click",".wpte_save_continue_link",(function(t){t.preventDefault();var a=".wpte-tab-content.content_loaded",i=!1;if(e(a+" input, "+a+" select, "+a+" textarea").each((function(t){if(e(this).parsley().validate(),!e(this).parsley().isValid()){i=!0;var a=e(this).parents(".wpte-tab-content").data("trigger");return e(".wpte-tab-wrap a."+a).click(),e(this).focus(),console.debug({invalidField:this}),!1}})),i)toastr.error(WTE_UI.validation_error);else{var n={};e(a+" input, "+a+" select, "+a+" textarea").each((function(t){if(filterby=e(this).attr("name"),filterby_val=e(this).val(),void 0===n[filterby]&&(n[filterby]=[]),"checkbox"==e(this).attr("type")||"radio"==e(this).attr("type"))1==e(this).data("multiple")?e(this).is(":checked")&&n[filterby].push(filterby_val):e(this).is(":checked")&&(n[filterby]=filterby_val);else if(e(this).is("textarea")&&e(this).closest(".tmce-active").size()>0){id=e(this).attr("id");var a=tinymce.get(id).getContent();n[filterby]=a}else n[filterby]=filterby_val})),n.next_tab=e(this).data("next-tab"),n.tab=e(this).data("tab"),n.action="wpte_tab_trip_save_and_continue",n.nonce=e(this).data("nonce"),n.post_id=e(this).data("post-id");var o=e('a[data-callback="'+n.next_tab+'"]');e.ajax({url:ajaxurl,data:n,type:"post",dataType:"json",beforeSend:function(t){e(".wpte-loading-anim").show()},success:function(t){var a,i,n;e(".wpte-loading-anim").hide(),t.success&&(null!==(a=wp)&&void 0!==a&&null!==(i=a.data)&&void 0!==i&&null!==(n=i.dispatch("core/notices"))&&void 0!==n&&n.createSuccessNotice?(o.trigger("click"),wp.data.dispatch("core/notices").createSuccessNotice(t.data.message).then((e=>{var t;null!=e&&null!==(t=e.notice)&&void 0!==t&&t.id&&setTimeout((function(){wp.data.dispatch("core/notices").removeNotice(e.notice.id)}),3e3)}))):toastr.success(t.data.message))}})}})),e(".wte-global-tabs-holder").sortable(),e(document).on("click",".wpte-add-glb-tab",(function(t){t.preventDefault();var a=wp.template("wpte-glb-tabs-row"),i=0<e(".wpte-glb-tab-row").length?e(".wpte-glb-tab-row").length+1:1;jQuery(".wte-global-tabs-holder").append(a({key:i})),++i})),e(document).on("click",".wpte-remove-glb-tab",(function(t){t.preventDefault(),e(this).parents(".wpte-glb-tab-row").remove()})),e(".wpte-glb-trp-infos-holdr").sortable(),e(document).on("click",".wpte-add-glb-trp-info",(function(e){e.preventDefault();var t=wp.template("wpte-add-trip-info-block"),a=Math.floor(99999998*Math.random())+1;jQuery(".wpte-glb-trp-infos-holdr").append(t({key:a})),++a})),e(document).on("click",".wpte-remove-glb-ti",(function(t){t.preventDefault(),e(this).parents(".wpte-glb-trp-infos-row").remove()})),e(document).on("click",".wpte-save-global-settings",(function(t){t.preventDefault();var a=".wpte-global-settngstab.content_loaded",i={};e(a+" input, "+a+" select, "+a+" textarea").each((function(t){if(filterby=e(this).attr("name"),filterby_val=e(this).val(),void 0===i[filterby]&&(i[filterby]=[]),"checkbox"==e(this).attr("type")||"radio"==e(this).attr("type"))1==e(this).data("multiple")?e(this).is(":checked")&&i[filterby].push(filterby_val):e(this).is(":checked")&&(i[filterby]=filterby_val);else if(e(this).is("textarea")&&e(this).closest(".tmce-active").size()>0){id=e(this).attr("id");var a=tinymce.get(id).getContent();i[filterby]=a}else e(this).is("textarea")&&0==e(this).closest(".tmce-active").size()?(a=p(filterby_val),i[filterby]=a):i[filterby]=filterby_val})),i.action="wpte_global_tabs_save_data",i.nonce=e(this).data("nonce"),i.tab=e(this).data("tab"),e.ajax({url:ajaxurl,data:i,type:"post",dataType:"json",beforeSend:function(t){e(".wpte-loading-anim").show()},success:function(t){e(".wpte-loading-anim").hide(),t.success&&toastr.success(t.data.message)}})}))}function a(){var e=jQuery("#trip_pricing_id");if(e.length)return jQuery("html,body").animate({scrollTop:e.offset().top},500,"swing"),!1}function i(){jQuery(".wpte-multi-pricing-wrap").sortable(),jQuery("#wpte-adult-price-pertype-sel").change((function(e){e.preventDefault(),jQuery("#wpte-trip-default-pper").val(jQuery(this).val())}))}function n(){jQuery(".wte-add-trip-highlight").on("click",(function(e){e.preventDefault();var t=Math.floor(99999998*Math.random())+1,a=wp.template("tour-highlight-row");jQuery(".wpte-trip-highlights-hldr").append(a({key:t})),jQuery('input[name="wp_travel_engine_setting[trip_highlights]['+t+'][highlight_text]"]').focus(),++t,jQuery(".wte-delete-highlight:last").on("click",(function(e){if(e.preventDefault(),!confirm(WTE_UI.suretodel))return!1;jQuery(this).parents(".wpte-trp-highlight").remove()}))})),jQuery(".wte-delete-highlight").on("click",(function(e){if(e.preventDefault(),!confirm(WTE_UI.suretodel))return!1;jQuery(this).parents(".wpte-trp-highlight").remove()})),jQuery(".wpte-trip-highlights-hldr").sortable()}function o(){jQuery(".wpte-add-itinerary").on("click",(function(e){e.preventDefault();var t=0<jQuery(".wpte-itinerary-repeter").length?jQuery(".wpte-itinerary-repeter").length+1:1,a=wp.template("wpte-add-iti-row");jQuery(".wpte-remove-iti").remove(),jQuery("#wpte-itinerary-repeter-holder").append(a({key:t})),++t})),jQuery(document).on("click",".wpte-remove-iti:last",(function(e){if(e.preventDefault(),!confirm(WTE_UI.suretodel))return!1;jQuery(this).parents(".wpte-itinerary-repeter").remove(),jQuery(".wpte-itinerary-repeter:last").append('<button class="wpte-delete wpte-remove-iti"></button>')}))}function r(){jQuery("body").on("click",".add-info",(function(e){e.preventDefault();var t=jQuery("#wte_global_trip_facts").find(":selected").val();if(""==t)return jQuery("#wte_global_trip_facts").css("-webkit-box-shadow","inset 0px 0px 1px 1px red"),jQuery("#wte_global_trip_facts").css("-moz-box-shadow","inset 0px 0px 1px 1px red"),void jQuery("#wte_global_trip_facts").css("box-shadow","inset 0px 0px 1px 1px red");jQuery("#wte_global_trip_facts").css("-webkit-box-shadow","inset 0px 0px 0px 0px red"),jQuery("#wte_global_trip_facts").css("-moz-box-shadow","inset 0px 0px 0px 0px red"),jQuery("#wte_global_trip_facts").css("box-shadow","inset 0px 0px 0px 0px red"),nonce=jQuery("#wte_global_trip_facts").attr("data-nonce"),jQuery.ajax({type:"post",url:ajaxurl,data:{action:"wp_add_trip_info",val:t,nonce},beforeSend:function(){},success:function(e){jQuery(".wpte-trip-facts-hldr").append(e),jQuery(".wpte-remove-trp-fact:last").on("click",(function(e){if(e.preventDefault(),!confirm(WTE_UI.suretodel))return!1;jQuery(this).parents(".wpte-trip-fact-row").remove()}))}})})),jQuery(".wpte-remove-trp-fact").on("click",(function(e){if(e.preventDefault(),!confirm(WTE_UI.suretodel))return!1;jQuery(this).parents(".wpte-trip-fact-row").remove()})),jQuery(".wpte-trip-facts-hldr").sortable()}function l(){var e;$=jQuery;var t=["image/jpeg","image/png"];function a(){$(".wpte-gallery").length&&$(".wpte-gallery").sortable({opacity:.9,revert:!0})}function i(e,t){var a=wp.template("wpte-trip-videogallery-row"),i=Math.floor(990*Math.random())+10,n=t;$(".wp-travel-engine-trip-video-gallery").append(a({index:i,video_data:e,thumb:n})),$("input#wte-trip-vid-url").val(""),$(".wte-video-list-srtable").sortable()}a(),$(document).on("click",".wpte-add-gallery-img",(function(i){i.preventDefault(),$(this),e&&e.close(),e=wp.media.frames.file_frame=wp.media({title:$(this).data("uploader-title"),button:{text:$(this).data("uploader-button-text")},library:{type:t},multiple:!0});var n=Math.floor(99999998*Math.random())+1;e.on("select",(function(){e.state().get("selection").map((function(e,t){e=e.toJSON();var a='<div class="wpte-gal-img"><input type="hidden" readonly name="wpte_gallery_id['+(n+t)+']" value="'+e.id+'"><img src="'+e.sizes.thumbnail.url+'" alt=""><div class="wpte-gal-btns"><button class="wpte-change wpte-change-gal-img"></button><button class="wpte-delete wpte-delete-gal-img"></button></div></div>';$(a).insertBefore("#wpte-gal-img-upldr-btn")}))})),a(),e.open()})),$(document).on("click",".wpte-change-gal-img",(function(a){a.preventDefault();var i=$(this);e&&e.close(),(e=wp.media.frames.file_frame=wp.media({title:$(this).data("uploader-title"),button:{text:$(this).data("uploader-button-text")},library:{type:t},multiple:!1})).on("select",(function(){attachment=e.state().get("selection").first().toJSON(),i.parents(".wpte-gal-img").children('input[type="hidden"]').val(attachment.id),i.parents(".wpte-gal-img").children("img").attr("src",attachment.sizes.thumbnail.url)})),e.open()})),$(document).on("click",".wpte-delete-gal-img",(function(e){e.preventDefault(),$(this).parents(".wpte-gal-img").remove()})),$(".wp-travel-engine-trip-video-gallery-add-video").click((function(e){e.preventDefault();var t=$("input#wte-trip-vid-url").val();if(""!=t){var a,n=function(e){e.match(/(http:\/\/|https:\/\/|)(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);var t=null;return RegExp.$3.indexOf("youtu")>-1?t="youtube":RegExp.$3.indexOf("vimeo")>-1&&(t="vimeo"),{type:t,id:RegExp.$6}}(t);null!=n.type&&""!=n.id?"youtube"==(a=n).type?i(a,"//img.youtube.com/vi/"+a.id+"/hqdefault.jpg"):"vimeo"==a.type&&$.get("//vimeo.com/api/v2/video/"+a.id+".json",(function(e){i(a,e[0].thumbnail_medium)})):toastr.error(WTE_UI.invalid_url)}else toastr.error(WTE_UI.novid)})),$(document).on("click",".wp-travel-engine-trip-video-gallery .remove-video",(function(e){if(e.preventDefault(),!confirm(WTE_UI.suretodel))return!1;$(this).parent("small").parent("li").remove()})),$(".wte-video-list-srtable").sortable()}function s(){var e;$=jQuery;var t=["image/jpeg","image/png"];$(document).on("click","#wpte-upload-map-img",(function(a){a.preventDefault(),$(this),e&&e.close(),(e=wp.media.frames.file_frame=wp.media({title:"Upload Map image",button:{text:"Upload image"},library:{type:t},multiple:!1})).on("select",(function(){e.state().get("selection").map((function(e,t){e=e.toJSON(),$("#map-image-prev-hldr").attr("src",e.sizes.medium.url),$('input[name="wp_travel_engine_setting[map][image_url]"]').val(e.id),$(".wpte-delete-map-img").show()}))})),e.open()})),$(document).on("click",".wpte-delete-map-img",(function(e){e.preventDefault();var t=confirm(WTE_UI.suretodel),a=$(this).data("fallback");if(!t)return!1;$("#map-image-prev-hldr").attr("src",a),$('input[name="wp_travel_engine_setting[map][image_url]"]').val(""),$(this).hide()}))}function c(){jQuery(document).on("click",".wpte-faq-block .wpte-faq-title",(function(){jQuery(this).parents(".wpte-faq-block").toggleClass("wpte-active"),jQuery(this).parents(".wpte-faq-title-wrap").siblings(".wpte-faq-content").stop(!0,!1,!0).slideToggle()})),jQuery(document).on("click",".wpte-add-faq-blck",(function(e){e.preventDefault();var t=0<jQuery(".wpte-faq-block-row").length?jQuery(".wpte-faq-block-row").length+1:1,a=wp.template("wpte-faq-block-tmp");jQuery(".wpte-faq-block-hldr").append(a({key:t})),++t})),jQuery(document).on("click",".wpte-del-faq",(function(e){if(e.preventDefault(),!confirm(WTE_UI.suretodel))return!1;jQuery(this).parents(".wpte-faq-block-row").remove()})),jQuery(".wpte-faq-block-hldr").sortable()}function p(e){if(null!=e&&""!=e){var t=document.createElement("textarea"),a=e.replace(/&amp;/g,"&");return t.innerHTML=a,t.value}}!function(d){function u(e){var t=e.attr("class").split(" ")[1];e.siblings(".wpte-tab").removeClass("current"),e.addClass("current"),e.parents(".wpte-tab-wrap").siblings(".wpte-tab-content-wrap").children(".wpte-tab-content").removeClass("current"),e.parents(".wpte-tab-wrap").siblings(".wpte-tab-content-wrap").children("."+t+"-content").addClass("current content_loaded"),a()}jQuery(document).ready((function(a){t(),n(),a(".wpte-tab-nav").click((function(t){t.preventDefault();var d=a(this);if(a(this).hasClass("content_loaded"))u(d);else{var g=a(this).data("tab-details"),w=g.content_key,f={action:"wpte_admin_load_tab_content",tab_details:g,post_id:a(this).data("post-id"),next_tab:a(this).data("next-tab"),nonce:a(this).data("nonce")};a.ajax({url:ajaxurl,data:f,type:"post",dataType:"json",beforeSend:function(e){a(".wpte-loading-anim").show()},success:function(t){if(a(".wpte-loading-anim").hide(),t.success){var g=t.data.html;switch(a("#wte-trip-edit-tabs").append(g),a(".wpte-tab-content-wrap textarea").each((function(){a(this).val(p(a(this).val()))})),u(d),e("wpte_after_admin_tab_shown",w),w){case"wpte-pricing":i();break;case"wpte-overview":n();break;case"wpte-itinerary":o();break;case"wpte-facts":r();break;case"wpte-gallery":l();break;case"wpte-map":s();break;case"wpte-faqs":c()}d.addClass("content_loaded"),document.dispatchEvent(new CustomEvent("wteTripEditTabContentLoaded",{detail:{contentKey:w}}))}}})}})),a(document).on("click",".wpte_load_global_settings_tab",(function(t){t.preventDefault();var i=a(this);if(a(this).hasClass("content_loaded"))u(i);else{var n=a(this).data("tab-data"),o=a(this).data("content-key"),r={action:"wpte_global_settings_load_tab_content",tab_details:n,content_key:o,nonce:a(this).data("nonce")};a.ajax({url:ajaxurl,data:r,type:"post",dataType:"json",beforeSend:function(e){a(".wpte-loading-anim").show()},success:function(t){if(a(".wpte-loading-anim").hide(),t.success){var n=t.data.html;switch(a(".wpte-global-settings-tbswrp").append(n),u(i),e("wpte_after_global_settings_tab_shown",o),o){case"wpte-miscellaneous":case"wpte-extensions":case"wpte-payment":a("select.wpte-enhanced-select").select2()}i.addClass("content_loaded"),document.dispatchEvent(new CustomEvent("wteSettingsTabContentLoaded",{detail:{contentKey:o}}))}}})}})),a(document).on("change keyup","*[bind]",(function(e){var t=a(this).attr("bind"),i=""!=a(this).val()?a(this).val():"";a("*[bind='"+t+"']").val(i)})),a(document).on("change keyup","*[bindSale]",(function(e){var t=a(this).attr("bindSale"),i=""!=a(this).val()?a(this).val():"";a("*[bindSale='"+t+"']").val(i)})),a(document).on("change",'input[name="wp_travel_engine_setting[multiple_pricing][adult][enable_sale]"]',(function(e){a("#wpte-trip-enb-sale-price").prop("checked",this.checked)})),a(document).on("click",".wpte-copy-btn",(function(e){e.preventDefault();var t=a(this).data("copyid"),i=document.getElementById(t);i.select(),i.setSelectionRange(0,99999),document.execCommand("copy"),toastr.success(WTE_UI.copied)})),a(document).on("click",".wpte-add-icon",(function(e){if(e.preventDefault(),a(".wpte-font-awesome-list").hide(),a(this).siblings(".wpte-font-awesome-list").length<1){var t=a(".wp-travel-engine-font-awesome-list-template").clone();a(this).after(t.html()),a(this).siblings(".wpte-font-awesome-list").fadeIn("slow")}else a(this).siblings(".wpte-ico-search").remove(),a(this).siblings(".wpte-font-awesome-list").remove()})),a(document).on("click",".wpte-font-awesome-list li",(function(e){e.preventDefault();var t=a(this).children("svg"),i=a(this).children("svg").attr("data-prefix")+" fa-"+a(this).children("svg").attr("data-icon");a(this).parent().parent().siblings(".trip-tabs-icon").attr("value",i),a(this).parent().parent().siblings(".trip-tabs-icon").siblings("span.wpte-icon-preview").children(".wpte-icon-holdr").html(t),a(this).parent().parent().fadeOut("slow",(function(){})),a(this).parent().parent().siblings(".trip-tabs-icon").siblings(".wpte-font-awesome-list").remove(),a(this).parents(".wpte-icons-holder").find(".wpte-ico-search").remove()})),a(document).on("click",".wpte-remove-icn-btn",(function(e){e.preventDefault(),a(this).siblings(".wpte-icon-holdr").html(""),a(this).parents(".wpte-icon-preview").siblings(".trip-tabs-icon").val("")})),a(document).on("keyup",".wpte-ico-search",(function(){var e=a(this).val(),t=new RegExp(e,"gi");a(this).parent(".wpte-font-awesome-list").find("li").show().not((function(){return t.test(a(this).find("svg").attr("data-icon"))})).hide()})),a(".wpte-enhanced-select").select2({allowClear:!0,closeOnSelect:!1}),a(".wp-travel-engine-datetime").datepicker({dateFormat:"yy-mm-dd"}),a(document).on("click",".wpte-edit-bkng",(function(e){e.preventDefault(),a(this).parents(".wpte-block").find(".wpte-block-content").fadeOut("slow").css({height:0,"padding-top":0,"padding-bottom":0,overflow:"hidden"}),a(this).parents(".wpte-block").find(".wpte-block-content-edit").fadeIn("slow").css("height","auto")})),a(document).on("click",".wpte-edit-prsnl-details",(function(e){e.preventDefault(),a(this).parents(".wpte-prsnl-dtl-blk").find(".wpte-prsnl-dtl-blk-content").fadeOut("slow").css({height:0,"margin-top":0,overflow:"hidden"}),a(this).parents(".wpte-prsnl-dtl-blk").find(".wpte-prsnl-dtl-blk-content-edit").fadeIn("slow").css("height","auto")})),a(".wpte-glb-trp-infos-row").each((function(){"select"==a(this).find("select option:selected").val()?(a(this).find(".select-options").show(),a(this).find(".input-placeholder").hide()):(a(this).find(".select-options").hide(),a(this).find(".input-placeholder").show())})),a("body").on("change",".wpte-trp-inf-fieldtyp",(function(e){"select"==a(this).find("select option:selected").val()?a(this).siblings(".wpte-field").find(".select-options").fadeIn("slow"):a(this).siblings(".wpte-field").find(".select-options").hide(),"text"==a(this).find("select option:selected").val()||"number"==a(this).find("select option:selected").val()||"textarea"==a(this).find("select option:selected").val()?a(this).siblings(".wpte-field").find(".input-placeholder").fadeIn("slow"):a(this).siblings(".wpte-field").find(".input-placeholder").hide()}))})),d((function(){jQuery(document).ready((function(e){e(document).on("click",".wpte-rich-textarea",(function(t){var a=e(this),i=e(this).find("textarea.wte-editor-area").attr("id");a.hasClass("delay")&&(a.find(".wte-editor-notice").remove(),a.removeClass("delay"),function(e){wp.editor.initialize?wp.editor.initialize(e,{tinymce:{wpautop:!0,plugins:"charmap colorpicker compat3x directionality fullscreen hr image lists media paste tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview",toolbar1:"bold italic underline strikethrough | bullist numlist | blockquote hr wp_more | alignleft aligncenter alignright | link unlink | fullscreen | wp_adv",toolbar2:"formatselect alignjustify forecolor | pastetext removeformat charmap | outdent indent | undo redo | wp_help"},quicktags:!0,mediaButtons:!0}):wp.oldEditor.initialize&&wp.oldEditor.initialize(e,{tinymce:{wpautop:!0,plugins:"charmap colorpicker compat3x directionality fullscreen hr image lists media paste tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview",toolbar1:"bold italic underline strikethrough | bullist numlist | blockquote hr wp_more | alignleft aligncenter alignright | link unlink | fullscreen | wp_adv",toolbar2:"formatselect alignjustify forecolor | pastetext removeformat charmap | outdent indent | undo redo | wp_help"},quicktags:!0,mediaButtons:!0})}(i))})),toastr.options.positionClass="toast-bottom-full-width",e(document).on("click",".wp-travel-engine-featured-trip",(function(t){t.preventDefault();var a=e(this),i={action:"wp_travel_engine_featured_trip",post_id:e(this).attr("data-post-id"),nonce:e(this).attr("data-nonce")};e.ajax({url:ajaxurl,data:i,type:"post",dataType:"json",success:function(e){"invalid"!=e&&(a.removeClass("dashicons-star-filled").removeClass("dashicons-star-empty"),"yes"==e.new_status?a.addClass("dashicons-star-filled"):a.addClass("dashicons-star-empty"))}})})),e(document).on("click",".wp-travel-engine-featured-term",(function(t){t.preventDefault();var a=e(this),i={action:"wp_travel_engine_featured_term",post_id:e(this).attr("data-term-id"),nonce:e(this).attr("data-nonce")};e.ajax({url:ajaxurl,data:i,type:"post",dataType:"json",success:function(e){"invalid"!=e&&(a.removeClass("dashicons-star-filled").removeClass("dashicons-star-empty"),"yes"==e.new_status?a.addClass("dashicons-star-filled"):a.addClass("dashicons-star-empty"))}})})),e(document).on("click",".wpte-tab-wrap .wpte-tab",(function(){var t=e(this).attr("class").split(" ")[1];e(this).siblings(".wpte-tab").removeClass("current"),e(this).addClass("current"),e(this).parents(".wpte-tab-wrap").siblings(".wpte-tab-content-wrap").children(".wpte-tab-content").removeClass("current"),e(this).parents(".wpte-tab-wrap").siblings(".wpte-tab-content-wrap").children("."+t+"-content").addClass("current content_loaded")}))}))}))}(jQuery),window.wpte_add_action=function(e,t,a){a||(a=10),a>100&&(a=100),a<0&&(a=0),"undefined"==typeof actions&&(actions={}),void 0===actions[e]&&(actions[e]=[]),void 0===actions[e][a]&&(actions[e][a]=[]),actions[e][a].push(t)},window.wpte_do_action=e,window.wpte_core_ui_fxn=t,window.wpte_trip_edit_scrolltop=a,window.wpte_tab_wpte_pricing=i,window.wpte_tab_wpte_overview=n,window.wpte_tab_wpte_itinerary=o,window.wpte_tab_wpte_trip_facts=r,window.wpte_tab_wpte_gallery=l,window.wpte_tab_wpte_map=s,window.wpte_tab_wpte_faq=c,window.decodeEntities=p})(),jQuery(document).ready((function(e){e(".wte-preview-enquiry").click((function(t){t.preventDefault();var a={enquiry_id:e(this).data("enquiryid"),action:"wte_get_enquiry_preview",_nonce:this.dataset.nonce},i=e(this);e.ajax({url:ajaxurl,data:a,type:"post",dataType:"json",beforeSend:function(){i.removeClass("dashicons-welcome-view-site").addClass("dashicons-update-alt")},success:function(e){e.success&&(jQuery.fancybox.open({src:e.data.html,type:"inline",baseClass:"wte-fb-popup"}),i.addClass("dashicons-welcome-view-site").removeClass("dashicons-update-alt"))}})}))})),jQuery(document).ready((function(e){e(".wp-travel-meta-datetime, .wp-travel-engine-datetime").datepicker({dateFormat:"yy-mm-dd"}),e(document).on("click",".wte-clone-post",(function(t){t.preventDefault();var a={post_id:e(this).data("post_id"),security:e(this).data("security"),action:"wte_fxn_clone_trip_data"};e.ajax({url:ajaxurl,data:a,type:"post",dataType:"json",success:function(e){e.success?location.href=e.data.edit_link||location.href:location.href=location.href}})}))})),(()=>{let e=null;document.addEventListener("click",(t=>{var a,i;if((null===(a=Array.from(t.target.classList))||void 0===a?void 0:a.indexOf("wpte-add-account"))>-1){e=e||document.getElementById("wte-bank-transfer-accounts-table");let t=document.createElement("tr"),a=e&&e.querySelector("tbody"),i=a&&a.querySelectorAll("tr")&&a.querySelectorAll("tr").length||0,n=`<td></td>\n            <td>\n                <input type="text" name="wp_travel_engine_settings[bank_transfer][accounts][${i}][account_name]"/>\n            </td>\n            <td>\n                <input type="text" name="wp_travel_engine_settings[bank_transfer][accounts][${i}][account_number]"/>\n            </td>\n            <td>\n                <input type="text" name="wp_travel_engine_settings[bank_transfer][accounts][${i}][bank_name]"/>\n            </td>\n            <td>\n                <input type="text" name="wp_travel_engine_settings[bank_transfer][accounts][${i}][sort_code]"/>\n            </td>\n            <td>\n                <input type="text" name="wp_travel_engine_settings[bank_transfer][accounts][${i}][iban]"/>\n            </td>\n            <td>\n                <input type="text" name="wp_travel_engine_settings[bank_transfer][accounts][${i}][swift]"/>\n            </td>\n            <td><button class="wpte-btn wpte-danger wpte-remove-account">X</button></td>`;t.innerHTML=n,a&&a.appendChild(t)}if((null===(i=Array.from(t.target.classList))||void 0===i?void 0:i.indexOf("wpte-remove-account"))>-1){let e=t.target.closest("tr");e&&e.remove()}}))})(),(()=>{const{ui:{Accordion:e},util:t,api:a}=window.wteL10n;class i{constructor(e){var t;e&&(this.store=null),this._state={trip:{},packages:{}},this._store=Redux.createStore(((e,t)=>"UPDATE_STORE"===t.type?{...e,...t.data}:e),{loading:!0},Redux.applyMiddleware((e=>t=>a=>"function"==typeof a?a(e.dispatch,e.getState):t(a)))),this.state$=(t=this._store,new rxjs.Observable((e=>(e.next(t),t.subscribe((()=>{e.next(t)}))))));const i=this.state$.pipe(rxjs.operators.map((e=>e.getState().tripPackages)));i.subscribe((e=>{let t;return a=>{lodash.isEqual(t,a)||(t=a,e.renderPackages())}})(this)),this._store.dispatch((async(t,i)=>{var n;let o=new Headers;o.set("X-WP-Nonce",wpApiSettings.nonce);let r=await a.get("trip",{id:e.tripID,context:"edit"},{headers:o}),l=null!==(n=r.packages_ids)&&void 0!==n?n:[];l=l.length>0&&l.join(",").length>0?l:[];let s=l.length>0?Object.assign({},await a.get("packages",{include:l.join(","),context:"edit",per_page:100},{headers:{"Content-Type":"application/json","X-WP-Nonce":wpApiSettings.nonce}})):{},c=await a.get("categories"),p={};for(let e in s){let t=s[e],a={},i=t["package-categories"];for(let t of Object.keys(c))a={...a,[t]:{packageID:+e,categoryID:+t,...i[t]}};s[e]["package-categories"]=a,p={...p,[e]:{packageCategories:a,groupDiscountPricing:t["group-pricing"]||{},packageDates:t["package-dates"]?lodash.keyBy(t["package-dates"],(e=>e.dtstart.split("-").join(""))):{}}}}t({type:"UPDATE_STORE",data:{loading:!1,trip:r,tripPackagesIds:l,tripPackages:s,packageCategoriesCollection:c,editFormData:p}})})),this.packageTemplate=wp.template("wte-package"),this.datesTemplate=wp.template("wte-package-dates"),this.dateTemplate=wp.template("wte-package-date"),this.categoriesTemplate=wp.template("wte-package-categories"),this.categoryTemplate=wp.template("wte-package-category")}addPackageToStore(e){let{tripPackages:t,tripPackagesIds:a,packageCategoriesCollection:i,editFormData:n}=this._store.getState(),o=e.id,r={},l=e["package-categories"];for(let e of Object.keys(i))r={...r,[e]:{packageID:+o,categoryID:+e,enabledSale:!(null==l||!l.enabled_sale||null==l||!l.enabled_sale[e]),label:i[e].name,maxPax:(null==l?void 0:l.max_paxes)&&+l.max_paxes[e]||"",minPax:(null==l?void 0:l.min_paxes)&&+l.min_paxes[e]||0,price:(null==l?void 0:l.prices)&&+l.prices[e]||"",salePrice:(null==l?void 0:l.sale_prices)&&+l.sale_prices[e]||""}};let s={};s={...s,[o]:{packageCategories:r,groupDiscountPricing:e["group-pricing"]||{},packageDates:e["package-dates"]||[]}},this._store.dispatch({type:"UPDATE_STORE",data:{tripPackages:{...t,[e.id]:e},tripPackagesIds:[...a,e.id],editFormData:{...n,...s}}})}renderPackages(){var a,i,n,o,r,l;if(this._store.getState().loading)return;let{tripPackages:s,editFormData:c,trip:p}=this._store.getState(),d=document.getElementById("wte-packages-list"),u=document.querySelector("#wte-packages-wrapper .wpte-repeater-hading");u&&(null===(a=Object.keys(s))||void 0===a?void 0:a.length)>0&&u.style.removeProperty("display");let g=null!=p&&p.packages_ids?null==p?void 0:p.packages_ids:Object.keys(s),w=new Set([...g,...Object.keys(s)]);for(let e of w){if(document.getElementById(`wte-package-${e}`))continue;let t=s[e];if(!t)continue;let a=this.packageTemplate({packageID:+e,tripPackage:s[e]}),i=document.createElement("div");i.innerHTML=a;let n=i.firstElementChild,o=n.querySelector(`#wpte-tab-pricing-general-${e}`);o&&(o.innerHTML=wp.template("wte-package-general")({store:this._store.getState(),categories:this._store.getState().editFormData[e].packageCategories,tripPackage:t}));let r=n.querySelector(`#wpte-tab-pricing-categories-${e}`);r.innerHTML=wp.template("wte-package-categories")({store:this._store.getState(),tripPackage:t});let l=r.querySelector(`#wte-package-categories_${e}`);for(let t in this._store.getState().editFormData[e].packageCategories){let a=this._store.getState().editFormData[e].packageCategories[t],n=wp.template("wte-package-category")({store:this._store.getState(),category:a});i.innerHTML=n;let o=i.firstElementChild,r=l.appendChild(o).querySelector(`#wte-group-discount-pricing_${e}_${a.categoryID}`);r&&(r.innerHTML=wp.template("wte-group-discount-pricing")({store:this._store.getState(),packageID:e,categoryID:a.categoryID,groupDiscount:this._store.getState().editFormData[e].groupDiscountPricing[a.categoryID]||[]}))}let p=n.querySelector(`#wpte-tab-pricing-dates-${e}`);p.innerHTML=wp.template("wte-package-dates")({store:this._store.getState(),tripPackage:t});let u=p.querySelector(`#wte-package-dates-list_${e}`);u&&(u.innerHTML=(t=>{let a="";for(let i in c[e].packageDates){let n=c[e].packageDates[i];a+=this.dateTemplate({tripPackage:t,dateIndex:n.dtstart.split("-").join(""),date:n})}return a})(t)),d.appendChild(n)}if(null===(i=d.querySelector(".wpte-loading-anim"))||void 0===i||i.remove(),d&&null!==(n=jQuery)&&void 0!==n&&null!==(o=n.fn)&&void 0!==o&&o.sortable){let e=document.querySelector('[name="trip-edit-tab__sorted-packages"]');jQuery(d).sortable({stop:function(t,a){if(e&&d){let t=d.querySelectorAll("[name*=packages_ids]");if(t){let a=Array.from(t).map((e=>e.value));e.value=a.toString()}}}})}null===(r=document.getElementById("wte-packages").querySelectorAll(".wte-flatpickr"))||void 0===r||r.forEach((e=>{let t=e.dataset.fpconfig?JSON.parse(e.dataset.fpconfig):{};flatpickr(e,t)})),null===(l=document.getElementById("wte-packages").querySelectorAll(".wte-accordion"))||void 0===l||l.forEach((a=>{t.hasClass(a,"wte-accordion-initialized")||function(t){new e(t)}(a)})),document.dispatchEvent(new Event("wteEditPackageRender")),console.debug("wteEditPackageRender event dispatched")}}(()=>{var n;document.addEventListener("wteTripEditTabContentLoaded",(e=>{"wpte-pricing"!==e.detail.contentKey||wteL10n.legacy||(window.wteEdit.editAPI=new i(wteEdit))}));const o=function(t){var a;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;i?(t=>{new e(t)})(i):null===(a=t.querySelectorAll(".wte-accordion"))||void 0===a||a.forEach((t=>{(t=>{new e(t)})(t)}))};document.addEventListener("click",(async function(e){if("wte-add-new-package"===e.target.id){e.preventDefault();var t={packages:[],categories:[]},a=await fetch(`${wpApiSettings.root+wpApiSettings.versionString}packages`,{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":wpApiSettings.nonce},body:JSON.stringify({title:document.getElementById("package_title").value,status:"publish",post_type:"trip-packages"})}),i=await a.json();i.id&&(t.packages=[i]),a=await fetch(`${wpApiSettings.root+wpApiSettings.versionString}package-categories`);var n=await a.json();n&&(t.categories=n);var o=wp.template("wte-package");document.getElementById("wte-packages").innerHTML=o(t)}})),t.on("click",".wte-package-delete",(e=>{e.preventDefault(),confirm("Are you sure? This will delete the package from the trip.")&&a.removePackage({id:e.target.dataset.packageId}).then((e=>{if(e.id||"rest_already_trashed"===e.code){var t;const a=wteEdit.editAPI._store;let i={...a.getState().tripPackages};if(delete i[e.id],null===(t=document.getElementById(`wte-package-${e.id}`))||void 0===t||t.remove(),Object.keys(i).length<=0){let e=document.querySelector("#wte-packages-wrapper .wpte-repeater-hading");e&&(e.style.display="none")}a.dispatch({type:"UPDATE_STORE",data:{tripPackages:i}})}}))})),t.on("click",".wte-package-category-add",(e=>{var t;e.preventDefault();let a=document.getElementById(e.target.dataset.target).value,i=e.target.dataset.packageId,n=wteEdit.api.packages[i];if(n["package-categories"]&&null!==(t=n["package-categories"])&&void 0!==t&&t.c_ids){var o;if((null===(o=n["package-categories"])||void 0===o?void 0:o.c_ids.indexOf(a))>-1)return;n["package-categories"].c_ids=[...n["package-categories"].c_ids,a]}else n["package-categories"]={c_ids:[a]};wteEdit.api.packages[i]=n,window.wteEdit.editAPI.addPackageToStore()})),t.on("click",".wte-package-category-edit",(e=>{e.preventDefault();const t=e.target.dataset.categoryIndex,a=e.target.dataset.packageId;t&&a&&jQuery.fancybox.open({src:jQuery(document.getElementById(`wte-package-category-editor_${a}_${t}`)),type:"inline",baseClass:"wte-fb-popup"})})),t.on("click",".wte-package-create",(e=>{var t;e.preventDefault();let i=null===(t=document.getElementById("package_title"))||void 0===t?void 0:t.value,n={};!async function(){n=await a.addNewPackage({title:i}),window.wteEdit.editAPI.addPackageToStore(n)}()})),t.on("click",".wte-package-date-edit",(e=>{e.preventDefault();const t=e.target.dataset.dateIndex,a=e.target.dataset.packageId;t&&a&&jQuery.fancybox.open({src:jQuery(document.getElementById(`wte-package-date-editor_${a}_${t}`)),type:"inline",baseClass:"wte-fb-popup"})})),t.on("click",".wte-package-date-remove",(e=>{var t;e.preventDefault();const a=e.target.dataset.dateIndex,i=e.target.dataset.packageId;if(!a||!i)return;let{editFormData:n}=wteEdit.editAPI._store.getState(),o={...n[i].packageDates};delete o[a];let r=e.target.dataset.target;null===(t=document.querySelector(r))||void 0===t||t.remove(),wteEdit.editAPI._store.dispatch({type:"UPDATE_STORE",data:{editFormData:{...n,[i]:{...n[i],packageDates:o}}}})})),t.on("click",".wte-package-date-add",(e=>{e.preventDefault();const t=window.wteEdit.editAPI._store,{editFormData:a,tripPackages:i}=t.getState(),n=e.target.dataset.packageId;if(!n)return;let r=document.getElementById(`wte-flatpickr__date_${n}`),l=null==r?void 0:r.value,s={...a[n].packageDates};const c=document.getElementById(`wte-package-dates-list_${n}`);if(l&&l.length>0){let e=l.split(", ");for(let t of e){let e=t.split("-").join("");if(s[e])continue;let a={dtstart:t,seats:"",availability_label:"",is_recurring:!1,rrule:{}};s={...s,[e]:a};let o=document.createElement("div");o.innerHTML=wp.template("wte-package-date")({tripPackage:i[n],date:a,dateIndex:e}),null==c||c.appendChild(o.firstElementChild)}}r._flatpickr.clear();const p=c.cloneNode(!0);c.parentNode.replaceChild(p,c),o(p.parentNode,p),o(p),function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a){let e=a.dataset.fpconfig?JSON.parse(a.dataset.fpconfig):{};flatpickr(a,e)}else null===(t=e.querySelectorAll(".wte-flatpickr"))||void 0===t||t.forEach((e=>{let t=e.dataset.fpconfig?JSON.parse(e.dataset.fpconfig):{};flatpickr(e,t)}))}(p),t.dispatch({type:"UPDATE_STORE",data:{editFormData:{...a,[n]:{...a[n],packageDates:s}}}})})),t.on("click",".wte-package-datetime-add",(e=>{var t,a,i,n;e.preventDefault();const o=e.target.dataset.target,r=e.target.dataset.packageId,l=e.target.dataset.dateIndex;let s=document.createElement("span");s.classList.add("tourtimewrap");let c=null!==(t=null===(a=document.getElementById(o))||void 0===a?void 0:a.querySelectorAll(".tourtimewrap").length)&&void 0!==t?t:0,p=`\n\t\t<span class="wte-tourtime wte-tt-from"><input name="dates[${r}][${l}][times][${c}][from]" type="text" class="wte-flatpickr"/></span> -\n\t\t<span class="wte-tourtime wte-tt-to"><input name="dates[${r}][${l}][times][${c}][to]" type="text" class="wte-flatpickr"/></span>\n\t\t<button class="wpte-btn wpte-btn-danger wte-tourtime-remove">X</button>\n\t\t`;s.innerHTML=p,null===(i=s.querySelectorAll(".wte-flatpickr"))||void 0===i||i.forEach((e=>{flatpickr(e,{enableTime:!0,noCalendar:!0,dateFormat:"H:i",static:!0})})),null===(n=document.getElementById(o))||void 0===n||n.append(s)})),t.on("click",".tourtimewrap>.wte-tourtime-remove",(function(e){e.preventDefault(),this.parentElement.remove()})),t.on("click",".wte-package-edit",(e=>{e.preventDefault();const t=e.target.dataset.packageId;t&&jQuery.fancybox.open({src:jQuery(document.getElementById(`wte-package-editor_${t}`)),type:"inline",afterClose:function(){var e;console.log({_this:this}),null===(e=document.querySelector(".editor-post-publish-button"))||void 0===e||e.click()},baseClass:"wte-fb-popup"})})),t.on("click",".wte-package-editor .mfp-close",(e=>{})),t.on("click","[data-toggle=tab]",(function(e){e.preventDefault();let t=this,a=t.hash,i=document.querySelector(a),n=t.closest(".wte-tabs");if(i&&!t.classList.contains("current")){if(n&&n.querySelector("[data-toggle=tab].current")){let e=n.querySelectorAll("[data-toggle=tab].current");e&&(null==e||e.forEach((e=>{if(!t.matches("[data-toggle=tab].current")){e.classList.toggle("current",!1);let t=e.hash;t&&document.querySelector(t).classList.remove("current")}})))}t.classList.add("current"),i.classList.toggle("current",!0)}}));var r=document.getElementsByClassName("wte-accordion");if(r.length>0)for(var l=0;l<r.length;l++)!function(t){new e(r[t])}(l);null===(n=document.querySelectorAll(".wte-flatpickr"))||void 0===n||n.forEach((e=>{let t=e.dataset.fpconfig?JSON.parse(e.dataset.fpconfig):{};flatpickr(e,t)}))})()})(),jQuery((function(e){var t;function a(){e("#feat-img-gallery-metabox-list li").each((function(t){e(this).find("input:hidden").attr("name","wpte_gallery_id["+t+"]")}))}function i(){e("#feat-img-gallery-metabox-list").sortable({opacity:.6,stop:function(){a()}})}e(document).on("click","a.feat-img-gallery-add",(function(a){a.preventDefault(),t&&t.close(),(t=wp.media.frames.file_frame=wp.media({title:e(this).data("uploader-title"),button:{text:e(this).data("uploader-button-text")},multiple:!0})).on("select",(function(){var a=e("#feat-img-gallery-metabox-list li").index(e("#feat-img-gallery-metabox-list li:last"));t.state().get("selection").map((function(t,i){t=t.toJSON(),index=a+(i+1),e("#feat-img-gallery-metabox-list").append('<li><input type="hidden" name="wpte_gallery_id['+index+']" value="'+t.id+'"><img class="image-preview" src="'+t.sizes.full.url+'"><a class="change-image button button-small" href="#" data-uploader-title="Change image" data-uploader-button-text="Change image">Change image</a><br><small><a class="remove-image" href="#">Remove image</a></small></li>')}))})),i(),t.open()})),e(document).on("click","a.change-image",(function(a){a.preventDefault();var i=e(this);t&&t.close(),(t=wp.media.frames.file_frame=wp.media({title:e(this).data("uploader-title"),button:{text:e(this).data("uploader-button-text")},multiple:!1})).on("select",(function(){attachment=t.state().get("selection").first().toJSON(),i.parent().find("input:hidden").attr("value",attachment.id),i.parent().find("img.image-preview").attr("src",attachment.sizes.thumbnail.url)})),t.open()})),e(document).on("click","#feat-img-gallery-metabox-list a.remove-image",(function(t){t.preventDefault(),e(this).parents("li").animate({opacity:0},200,(function(){e(this).remove(),a()}))})),i()})),function(e,t){if(e&&null!=e&&e.l10ns&&t){const a=t.split("_");null==e||e.localize(e.l10ns[a[0]]||e.l10ns.en)}else document.createElement("src")}(window.flatpickr,window.wteL10n.locale);