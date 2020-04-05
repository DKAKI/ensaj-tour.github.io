TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "mapLocations": [
   {
    "x": 326.92,
    "map": {
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_2D07B3C1_2271_88D0_41BA_00716EE1C823",
       "map": {
        "offsetY": 0,
        "x": 315.92,
        "width": 22,
        "y": 176.99,
        "class": "HotspotMapOverlayMap",
        "height": 22,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 11,
           "width": 11,
           "url": "media/map_2D61041B_2251_8F77_41B0_23D96C3B424D_HS_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 315.92,
        "y": 176.99,
        "class": "HotspotMapOverlayImage",
        "width": 22,
        "height": 22,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_2D61041B_2251_8F77_41B0_23D96C3B424D_HS_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2DFF2E78_2276_FBB1_41B7_119F5B757232",
       "map": {
        "offsetY": 0,
        "x": 388.92,
        "width": 30,
        "y": 85.94,
        "class": "HotspotMapOverlayMap",
        "height": 24,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 12,
           "width": 15,
           "url": "media/map_2D61041B_2251_8F77_41B0_23D96C3B424D_HS_1_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 388.92,
        "y": 85.94,
        "class": "HotspotMapOverlayImage",
        "width": 30,
        "height": 24,
        "image": {
         "levels": [
          {
           "height": 24,
           "width": 30,
           "url": "media/map_2D61041B_2251_8F77_41B0_23D96C3B424D_HS_1.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2DC4E7AA_2277_8951_41AE_47FFEFCEF436",
       "map": {
        "offsetY": 0,
        "x": 633.91,
        "width": 21,
        "y": 253.96,
        "class": "HotspotMapOverlayMap",
        "height": 22,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 11,
           "width": 10,
           "url": "media/map_2D61041B_2251_8F77_41B0_23D96C3B424D_HS_2_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 633.91,
        "y": 253.96,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 22,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 20,
           "url": "media/map_2D61041B_2251_8F77_41B0_23D96C3B424D_HS_2.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayOutsideOpacity": 0,
     "width": 782,
     "id": "map_2D61041B_2251_8F77_41B0_23D96C3B424D",
     "height": 521,
     "image": {
      "levels": [
       {
        "height": 521,
        "width": 782,
        "url": "media/map_2D61041B_2251_8F77_41B0_23D96C3B424D.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 260,
        "grayscale": true,
        "width": 391,
        "url": "media/map_2D61041B_2251_8F77_41B0_23D96C3B424D_lq.png",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "class": "Map",
     "minimumZoomFactor": 0.46,
     "fieldOfViewOverlayInsideColor": "#009999",
     "maximumZoomFactor": 1.2,
     "initialZoomFactor": 1,
     "label": "ensaj",
     "scaleMode": "fit_inside",
     "thumbnailUrl": "media/map_2D61041B_2251_8F77_41B0_23D96C3B424D_t.png",
     "fieldOfViewOverlayRadiusScale": 0.3
    },
    "class": "PanoramaMapLocation",
    "angle": 101.83,
    "y": 187.99
   }
  ],
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_28DA0DA3_2252_9957_418F_442A18282F59_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_28DA0DA3_2252_9957_418F_442A18282F59.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_28DA0DA3_2252_9957_418F_442A18282F59_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_3BEC4BB8_25BE_98B0_41C5_7DBB829531C1",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_2B9B9D60_2253_79D0_417B_1A8186C99398, this.camera_47999295_48E6_81EF_41C9_BF5230A475AE); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16.73,
        "yaw": -2.47,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 119,
           "url": "media/panorama_28DA0DA3_2252_9957_418F_442A18282F59_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.68
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -2.47,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.73,
        "image": {
         "levels": [
          {
           "height": 113,
           "width": 238,
           "url": "media/panorama_28DA0DA3_2252_9957_418F_442A18282F59_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.68
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_3ACD30C4_25BE_88D0_41C1_DBBF958514AE",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16.89,
        "yaw": 90.8,
        "image": {
         "levels": [
          {
           "height": 42,
           "width": 119,
           "url": "media/panorama_28DA0DA3_2252_9957_418F_442A18282F59_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.02
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 90.8,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.89,
        "image": {
         "levels": [
          {
           "height": 85,
           "width": 238,
           "url": "media/panorama_28DA0DA3_2252_9957_418F_442A18282F59_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.02
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "pitch": 0,
  "id": "panorama_28DA0DA3_2252_9957_418F_442A18282F59",
  "audios": [
   {
    "data": {
     "label": "ttsMP3.com_VoiceText_2020-3-31_2_54_35"
    },
    "autoplay": true,
    "id": "audio_388CA2DC_25D1_88F0_41C1_CD5545EBF16A",
    "class": "PanoramaAudio",
    "audio": {
     "oggUrl": "media/audio_388CA2DC_25D1_88F0_41C1_CD5545EBF16A.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_388CA2DC_25D1_88F0_41C1_CD5545EBF16A.mp3"
    }
   }
  ],
  "class": "Panorama",
  "hfov": 360,
  "label": "2018-04-29 (1)",
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMin": 60,
     "mapLocations": [
      {
       "x": 403.92,
       "map": "this.map_2D61041B_2251_8F77_41B0_23D96C3B424D",
       "class": "PanoramaMapLocation",
       "angle": 178.36,
       "y": 97.94
      }
     ],
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_2B9B9D60_2253_79D0_417B_1A8186C99398_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_2B9B9D60_2253_79D0_417B_1A8186C99398.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_2B9B9D60_2253_79D0_417B_1A8186C99398_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_3ADD81D4_25BF_88F0_419A_EA20D6ED722F",
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_28DA0DA3_2252_9957_418F_442A18282F59, this.camera_47834286_48E6_81EC_41D2_09E4F68793F8); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.53,
           "yaw": -1.86,
           "image": {
            "levels": [
             {
              "height": 45,
              "width": 139,
              "url": "media/panorama_2B9B9D60_2253_79D0_417B_1A8186C99398_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -12.68
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -1.86,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 19.53,
           "image": {
            "levels": [
             {
              "height": 90,
              "width": 278,
              "url": "media/panorama_2B9B9D60_2253_79D0_417B_1A8186C99398_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -12.68
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "hfovMax": 120,
     "pitch": 0,
     "id": "panorama_2B9B9D60_2253_79D0_417B_1A8186C99398",
     "class": "Panorama",
     "hfov": 360,
     "label": "2018-04-29 (2)",
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_28DA0DA3_2252_9957_418F_442A18282F59",
       "yaw": -1.86,
       "backwardYaw": -2.47,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "partial": false,
     "thumbnailUrl": "media/panorama_2B9B9D60_2253_79D0_417B_1A8186C99398_t.jpg"
    },
    "yaw": -2.47,
    "backwardYaw": -1.86,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "partial": false,
  "thumbnailUrl": "media/panorama_28DA0DA3_2252_9957_418F_442A18282F59_t.jpg"
 },
 {
  "preloadEnabled": false,
  "buttonZoomOut": {
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35.png",
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35_rollover.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35",
   "transparencyActive": false,
   "minWidth": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35_pressed.png",
   "data": {
    "name": "Button1157"
   },
   "paddingBottom": 0,
   "borderRadius": 0
  },
  "buttonPlayRight": {
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60.png",
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60_rollover.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60",
   "transparencyActive": false,
   "minWidth": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60_pressed.png",
   "data": {
    "name": "Button1166"
   },
   "paddingBottom": 0,
   "borderRadius": 0
  },
  "buttonMoveUp": {
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B.png",
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B_rollover.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B",
   "transparencyActive": false,
   "minWidth": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B_pressed.png",
   "data": {
    "name": "Button1162"
   },
   "paddingBottom": 0,
   "borderRadius": 0
  },
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "buttonCardboardView": "this.IconButton_44837AB0_48E7_8124_41AF_2C367841F561",
  "buttonMoveDown": {
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5.png",
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5_rollover.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5",
   "transparencyActive": false,
   "minWidth": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5_pressed.png",
   "data": {
    "name": "Button1164"
   },
   "paddingBottom": 0,
   "borderRadius": 0
  },
  "buttonMoveLeft": {
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82.png",
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82_rollover.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82",
   "transparencyActive": false,
   "minWidth": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82_pressed.png",
   "data": {
    "name": "Button1160"
   },
   "paddingBottom": 0,
   "borderRadius": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomIn": {
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842.png",
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842_rollover.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842",
   "transparencyActive": false,
   "minWidth": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842_pressed.png",
   "data": {
    "name": "Button1168"
   },
   "paddingBottom": 0,
   "borderRadius": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674.png",
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674_rollover.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674",
   "transparencyActive": false,
   "minWidth": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674_pressed.png",
   "data": {
    "name": "Button1159"
   },
   "paddingBottom": 0,
   "borderRadius": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonPause": {
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "toggle",
   "width": 40,
   "height": 40,
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED",
   "transparencyActive": false,
   "minWidth": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED_pressed.png",
   "data": {
    "name": "Button1163"
   },
   "paddingBottom": 0,
   "borderRadius": 0
  },
  "buttonRestart": {
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65.png",
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65_rollover.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65",
   "transparencyActive": false,
   "minWidth": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65_pressed.png",
   "data": {
    "name": "Button1158"
   },
   "paddingBottom": 0,
   "borderRadius": 0
  },
  "buttonMoveRight": {
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E.png",
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E_rollover.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E",
   "transparencyActive": false,
   "minWidth": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E_pressed.png",
   "data": {
    "name": "Button1165"
   },
   "paddingBottom": 0,
   "borderRadius": 0
  },
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true
 },
 {
  "buttonZoomIn": "this.IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842",
  "viewerArea": "this.MapViewer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "class": "MapPlayer",
  "buttonZoomOut": "this.IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_28DA0DA3_2252_9957_418F_442A18282F59_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_2B9B9D60_2253_79D0_417B_1A8186C99398",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2B9B9D60_2253_79D0_417B_1A8186C99398_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 60,
  "mapLocations": [
   {
    "x": 644.41,
    "map": "this.map_2D61041B_2251_8F77_41B0_23D96C3B424D",
    "class": "PanoramaMapLocation",
    "angle": 308.35,
    "y": 264.96
   }
  ],
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_2B94CA84_2253_9B50_41B9_664E5DA43934_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_2B94CA84_2253_9B50_41B9_664E5DA43934.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_2B94CA84_2253_9B50_41B9_664E5DA43934_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_2F9480C0_2256_88D0_41AE_391E2A3DB04A",
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.51,
        "yaw": 41.62,
        "image": {
         "levels": [
          {
           "height": 85,
           "width": 100,
           "url": "media/panorama_2B94CA84_2253_9B50_41B9_664E5DA43934_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.41
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 41.62,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.51,
        "image": {
         "levels": [
          {
           "height": 170,
           "width": 201,
           "url": "media/panorama_2B94CA84_2253_9B50_41B9_664E5DA43934_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.41
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "pitch": 0,
  "id": "panorama_2B94CA84_2253_9B50_41B9_664E5DA43934",
  "class": "Panorama",
  "hfov": 360,
  "label": "2018-04-29 (3)",
  "vfov": 180,
  "partial": false,
  "thumbnailUrl": "media/panorama_2B94CA84_2253_9B50_41B9_664E5DA43934_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2B94CA84_2253_9B50_41B9_664E5DA43934_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_47B15267_48E6_812C_41CB_6119EA14C81C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_28DA0DA3_2252_9957_418F_442A18282F59",
    "camera": "this.panorama_28DA0DA3_2252_9957_418F_442A18282F59_camera",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_47B15267_48E6_812C_41CB_6119EA14C81C",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_47B67276_48E6_812D_41A4_52912F714C8D, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2B9B9D60_2253_79D0_417B_1A8186C99398",
    "camera": "this.panorama_2B9B9D60_2253_79D0_417B_1A8186C99398_camera",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_47B67276_48E6_812D_41A4_52912F714C8D",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_47B6E276_48E6_812D_41C3_8379BB3DDDE1, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2B94CA84_2253_9B50_41B9_664E5DA43934",
    "camera": "this.panorama_2B94CA84_2253_9B50_41B9_664E5DA43934_camera",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_47B6E276_48E6_812D_41C3_8379BB3DDDE1",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.map_2D61041B_2251_8F77_41B0_23D96C3B424D",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_2D61041B_2251_8F77_41B0_23D96C3B424D",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_47B04267_48E6_812C_41CD_F06E18D2D815",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_47834286_48E6_81EC_41D2_09E4F68793F8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.53,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_47999295_48E6_81EF_41C9_BF5230A475AE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.14,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.audio_388CA2DC_25D1_88F0_41C1_CD5545EBF16A"
], "children": [
 {
  "toolTipShadowSpread": 0,
  "toolTipPaddingBottom": 4,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarHeadOpacity": 1,
  "toolTipFontSize": 12,
  "playbackBarBottom": 10,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressHeight": 20,
  "paddingTop": 0,
  "toolTipPaddingLeft": 6,
  "progressBarBorderColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipOpacity": 1,
  "progressBorderColor": "#AAAAAA",
  "transitionDuration": 500,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowBlurRadius": 3,
  "minWidth": 100,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBorderRadius": 4,
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowOpacity": 1,
  "borderRadius": 0,
  "toolTipFontColor": "#606060",
  "transitionMode": "blending",
  "playbackBarProgressOpacity": 1,
  "progressLeft": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontStyle": "normal",
  "playbackBarBorderSize": 2,
  "width": "100%",
  "progressBarBorderSize": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "minHeight": 50,
  "playbackBarHeadShadowOpacity": 0.7,
  "height": "100%",
  "toolTipShadowVerticalLength": 0,
  "progressRight": 10,
  "playbackBarHeadShadowColor": "#000000",
  "shadow": false,
  "toolTipPaddingRight": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBottom": 1,
  "borderSize": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeight": 20,
  "progressOpacity": 1,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "playbackBarHeadWidth": 6,
  "top": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "progressBarOpacity": 1,
  "id": "MainViewer",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBorderSize": 1,
  "progressBorderRadius": 4,
  "progressBorderSize": 2,
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "left": 0,
  "toolTipBorderRadius": 3,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 30,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35",
     "this.IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65",
     "this.IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674",
     "this.IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82",
     {
      "children": [
       "this.IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B",
       "this.IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED",
       "this.IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5"
      ],
      "paddingLeft": 0,
      "paddingRight": 0,
      "width": 40,
      "gap": 4,
      "height": "100%",
      "verticalAlign": "middle",
      "minHeight": 20,
      "contentOpaque": false,
      "backgroundOpacity": 0,
      "shadow": false,
      "scrollBarColor": "#000000",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "creationPolicy": "delayed",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "id": "Container_55DC4FA8_5E27_15CF_41BD_E12B3B6C43C0",
      "data": {
       "name": "Container1161"
      },
      "minWidth": 20,
      "scrollBarOpacity": 0.5,
      "layout": "vertical",
      "class": "Container",
      "overflow": "hidden",
      "paddingBottom": 0,
      "borderRadius": 0
     },
     "this.IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E",
     "this.IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60",
     {
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "width": 40,
      "height": 40,
      "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D.png",
      "minHeight": 0,
      "backgroundOpacity": 0,
      "shadow": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "paddingTop": 0,
      "cursor": "hand",
      "id": "IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D",
      "transparencyActive": false,
      "minWidth": 0,
      "class": "IconButton",
      "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D_pressed.png",
      "data": {
       "name": "Button1167"
      },
      "paddingBottom": 0,
      "borderRadius": 0
     },
     "this.IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842"
    ],
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "width": 392.01,
    "gap": 4,
    "height": 184.78,
    "minHeight": 20,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "center",
    "creationPolicy": "delayed",
    "paddingTop": 0,
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "id": "Container_55DC4FA8_5E27_15CF_419E_B6601832ABA2",
    "data": {
     "name": "Container1156"
    },
    "minWidth": 392,
    "scrollBarOpacity": 0.5,
    "layout": "horizontal",
    "class": "Container",
    "overflow": "hidden",
    "paddingBottom": 0,
    "borderRadius": 0
   }
  ],
  "paddingLeft": 0,
  "verticalAlign": "top",
  "paddingRight": 0,
  "width": "93.931%",
  "gap": 1,
  "height": 185,
  "minHeight": 1,
  "contentOpaque": false,
  "backgroundOpacity": 0,
  "shadow": false,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "center",
  "creationPolicy": "delayed",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "bottom": "0%",
  "data": {
   "name": "Container16156"
  },
  "layout": "horizontal",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "class": "Container",
  "overflow": "scroll",
  "left": "0%",
  "paddingBottom": 0,
  "borderRadius": 0
 },
 {
  "toolTipShadowSpread": 0,
  "toolTipPaddingBottom": 4,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarHeadOpacity": 1,
  "toolTipFontSize": 12,
  "playbackBarBottom": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressHeight": 20,
  "paddingTop": 0,
  "toolTipPaddingLeft": 6,
  "progressBarBorderColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipOpacity": 1,
  "progressBorderColor": "#AAAAAA",
  "transitionDuration": 500,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowBlurRadius": 3,
  "minWidth": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBorderRadius": 4,
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowOpacity": 1,
  "borderRadius": 0,
  "toolTipFontColor": "#606060",
  "transitionMode": "blending",
  "playbackBarProgressOpacity": 1,
  "progressLeft": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontStyle": "normal",
  "playbackBarBorderSize": 2,
  "width": "21.014%",
  "progressBarBorderSize": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "minHeight": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "height": "36.02%",
  "toolTipShadowVerticalLength": 0,
  "progressRight": 10,
  "playbackBarHeadShadowColor": "#000000",
  "shadow": false,
  "toolTipPaddingRight": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBottom": 2,
  "borderSize": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeight": 20,
  "progressOpacity": 1,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "playbackBarHeadWidth": 6,
  "top": "0%",
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "progressBarOpacity": 1,
  "id": "MapViewer",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBorderSize": 1,
  "progressBorderRadius": 4,
  "progressBorderSize": 2,
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "right": "0.04%"
 },
 {
  "maxHeight": 70,
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "mode": "push",
  "width": 70,
  "height": 70,
  "iconURL": "skin/IconButton_44837AB0_48E7_8124_41AF_2C367841F561.png",
  "minHeight": 1,
  "backgroundOpacity": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "borderSize": 0,
  "paddingTop": 0,
  "cursor": "hand",
  "bottom": "5.26%",
  "id": "IconButton_44837AB0_48E7_8124_41AF_2C367841F561",
  "transparencyActive": false,
  "maxWidth": 70,
  "minWidth": 1,
  "class": "IconButton",
  "data": {
   "name": "IconButton12329"
  },
  "right": "2.72%",
  "paddingBottom": 0,
  "borderRadius": 0
 }
], 
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "paddingRight": 0,
 "gap": 10,
 "width": "100%",
 "verticalAlign": "top",
 "minHeight": 20,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "buttonToggleMute": "this.IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D",
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "creationPolicy": "delayed",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "startPanoramaWithCamera": function(media, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); }
 },
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "data": {
  "name": "Player14994"
 },
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "class": "Player",
 "overflow": "visible",
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_47B04267_48E6_812C_41CD_F06E18D2D815.set('selectedIndex', 0)",
 "paddingBottom": 0,
 "borderRadius": 0
})