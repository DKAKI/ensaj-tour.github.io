TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "backwardYaw": 59.01,
    "yaw": 90.19,
    "class": "AdjacentPanorama",
    "panorama": {
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "backwardYaw": 90.19,
       "yaw": 59.01,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1"
      }
     ],
     "id": "panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_B0D3BC6B_AC72_4051_41E4_5CB297B2B4FA",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1, this.camera_AF877889_A43D_0239_41C7_E504A42753C9); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 9.15,
           "yaw": 59.01,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 147,
              "width": 127,
              "url": "media/panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 5.73
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfovMax": 120,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202_t.jpg",
     "mapLocations": [
      {
       "x": 225,
       "map": {
        "initialZoomFactor": 1,
        "maximumZoomFactor": 1.2,
        "fieldOfViewOverlayOutsideOpacity": 0,
        "overlays": [
         {
          "rollOverDisplay": false,
          "id": "overlay_B5E787F9_AC16_4031_41E1_9B9AC644628C",
          "class": "AreaHotspotMapOverlay",
          "data": {
           "label": "Image"
          },
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 2)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "image": {
           "x": 212,
           "y": 370,
           "width": 26,
           "class": "HotspotMapOverlayImage",
           "height": 23,
           "image": {
            "levels": [
             {
              "height": 23,
              "width": 26,
              "url": "media/map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903_HS_2.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "map": {
           "offsetY": 0,
           "x": 212,
           "width": 26,
           "class": "HotspotMapOverlayMap",
           "height": 23,
           "offsetX": 0,
           "image": {
            "levels": [
             {
              "height": 11,
              "width": 13,
              "url": "media/map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903_HS_2_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "y": 370
          },
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_BA19EF91_AC16_40F1_41C2_CED1CD8E7A98",
          "class": "AreaHotspotMapOverlay",
          "data": {
           "label": "Image"
          },
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 1)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "image": {
           "x": 318,
           "y": 217,
           "width": 24,
           "class": "HotspotMapOverlayImage",
           "height": 24,
           "image": {
            "levels": [
             {
              "height": 24,
              "width": 24,
              "url": "media/map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903_HS_3.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "map": {
           "offsetY": 0,
           "x": 318,
           "width": 24,
           "class": "HotspotMapOverlayMap",
           "height": 24,
           "offsetX": 0,
           "image": {
            "levels": [
             {
              "height": 12,
              "width": 12,
              "url": "media/map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903_HS_3_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "y": 217
          },
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_B50FECF7_AC16_C031_41A4_DD380E86D4A1",
          "class": "AreaHotspotMapOverlay",
          "data": {
           "label": "Image"
          },
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "image": {
           "x": 257,
           "y": 174,
           "width": 19,
           "class": "HotspotMapOverlayImage",
           "height": 20,
           "image": {
            "levels": [
             {
              "height": 20,
              "width": 19,
              "url": "media/map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903_HS_4.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "map": {
           "offsetY": 0,
           "x": 257,
           "width": 19,
           "class": "HotspotMapOverlayMap",
           "height": 20,
           "offsetX": 0,
           "image": {
            "levels": [
             {
              "height": 10,
              "width": 9,
              "url": "media/map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903_HS_4_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "y": 174
          },
          "useHandCursor": true
         }
        ],
        "fieldOfViewOverlayOutsideColor": "#000000",
        "width": 383,
        "id": "map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903",
        "height": 425,
        "fieldOfViewOverlayInsideOpacity": 0.4,
        "image": {
         "levels": [
          {
           "height": 425,
           "width": 383,
           "url": "media/map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903.png",
           "class": "ImageResourceLevel"
          },
          {
           "height": 212,
           "grayscale": true,
           "width": 191,
           "url": "media/map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903_lq.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "thumbnailUrl": "media/map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903_t.png",
        "fieldOfViewOverlayRadiusScale": 0.3,
        "fieldOfViewOverlayInsideColor": "#FFFFFF",
        "minimumZoomFactor": 0.5,
        "label": "floor-arabic",
        "scaleMode": "fit_inside",
        "class": "Map"
       },
       "y": 381.5,
       "angle": 49.74,
       "class": "PanoramaMapLocation"
      }
     ],
     "label": "1 (3)",
     "partial": false,
     "class": "Panorama",
     "vfov": 180,
     "hfovMin": 60
    }
   },
   {
    "distance": 1,
    "backwardYaw": 0.92,
    "yaw": -30.9,
    "class": "AdjacentPanorama",
    "panorama": {
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "backwardYaw": -30.9,
       "yaw": 0.92,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1"
      }
     ],
     "id": "panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_A3954B43_AC16_C051_41CC_836D19DCBF8B",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1, this.camera_AFDD88C8_A43D_0227_41A9_AF23A8F0622D); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 19.13,
           "yaw": 0.92,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 287,
              "width": 287,
              "url": "media/panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -22.23
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_B3AF2BD1_AC0E_C071_41E5_7BDB207F973A",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.showWindow(this.window_B3F114FA_AC0F_C033_41C6_E56443A7BD65, null, false)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "hfov": 7.16,
           "yaw": -92.94,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 142,
              "width": 168,
              "url": "media/panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 53.8
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfovMax": 120,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_t.jpg",
     "mapLocations": [
      {
       "x": 330,
       "map": "this.map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903",
       "y": 229,
       "angle": -87.74,
       "class": "PanoramaMapLocation"
      }
     ],
     "label": "1 (2)",
     "partial": false,
     "class": "Panorama",
     "vfov": 180,
     "hfovMin": 60
    }
   }
  ],
  "audios": [
   {
    "id": "audio_B8FE3602_AC0E_43D3_41D1_F116C2E04BD4",
    "class": "PanoramaAudio",
    "audio": {
     "oggUrl": "media/audio_B8FE3602_AC0E_43D3_41D1_F116C2E04BD4.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_B8FE3602_AC0E_43D3_41D1_F116C2E04BD4.mp3"
    },
    "data": {
     "label": "arabic1"
    },
    "autoplay": true
   }
  ],
  "id": "panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_A0B0AB49_AC16_4051_41A4_670687A8D180",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31, this.camera_A8322904_A43D_022F_41C9_D4491C41C68C); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 8.54,
        "yaw": -30.9,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 85,
           "width": 118,
           "url": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.89
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A20DDECD_AC72_4051_41DF_9EB8A6253308",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202, this.camera_AFC6E8E7_A43D_03E9_41DB_1BB4E87D6A4D); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 21,
        "yaw": 90.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 147,
           "width": 312,
           "url": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.86
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B6C1258C_AC15_C0D7_41D0_F2094E518C1C",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 6.82,
        "yaw": -172.84,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 79,
           "width": 96,
           "url": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 11.45
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B1791720_AC1E_41CF_41E0_0F66C35B1C14",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.showWindow(this.window_B1438CBA_AC1D_C033_41C1_93B3BA246B41, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 13.71,
        "yaw": -121.73,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 236,
           "width": 209,
           "url": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 24.61
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_t.jpg",
  "mapLocations": [
   {
    "x": 266.5,
    "map": "this.map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903",
    "y": 184,
    "angle": 176.99,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "1 (1)",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "buttonCardboardView": "this.IconButton_BD91ED5A_AC3D_C073_41E0_B25754B6B096",
  "buttonRestart": {
   "pressedIconURL": "skin/IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "minHeight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE",
   "data": {
    "name": "Button8705"
   },
   "minWidth": 0,
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "buttonZoomOut": {
   "pressedIconURL": "skin/IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "minHeight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919",
   "data": {
    "name": "Button8704"
   },
   "minWidth": 0,
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "buttonMoveUp": {
   "pressedIconURL": "skin/IconButton_B887710F_ACF6_41D1_41C3_D4A7E360C1AF_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_B887710F_ACF6_41D1_41C3_D4A7E360C1AF.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "minHeight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_B887710F_ACF6_41D1_41C3_D4A7E360C1AF_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_B887710F_ACF6_41D1_41C3_D4A7E360C1AF",
   "data": {
    "name": "Button8709"
   },
   "minWidth": 0,
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "buttonMoveRight": {
   "pressedIconURL": "skin/IconButton_B887310F_ACF6_41D1_41D1_EC5132DA4A62_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_B887310F_ACF6_41D1_41D1_EC5132DA4A62.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "minHeight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_B887310F_ACF6_41D1_41D1_EC5132DA4A62_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_B887310F_ACF6_41D1_41D1_EC5132DA4A62",
   "data": {
    "name": "Button8712"
   },
   "minWidth": 0,
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "mouseControlMode": "drag_acceleration",
  "buttonPlayLeft": {
   "pressedIconURL": "skin/IconButton_B887D10F_ACF6_41D1_41A3_88E4EBD8B8B7_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_B887D10F_ACF6_41D1_41A3_88E4EBD8B8B7.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "minHeight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_B887D10F_ACF6_41D1_41A3_88E4EBD8B8B7_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_B887D10F_ACF6_41D1_41A3_88E4EBD8B8B7",
   "data": {
    "name": "Button8706"
   },
   "minWidth": 0,
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "buttonPause": {
   "pressedIconURL": "skin/IconButton_B887610F_ACF6_41D1_41DD_18CA17947F60_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_B887610F_ACF6_41D1_41DD_18CA17947F60.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "toggle",
   "minHeight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": true,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_B887610F_ACF6_41D1_41DD_18CA17947F60",
   "data": {
    "name": "Button8710"
   },
   "minWidth": 0,
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "buttonZoomIn": {
   "pressedIconURL": "skin/IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "minHeight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228",
   "data": {
    "name": "Button8715"
   },
   "minWidth": 0,
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveLeft": {
   "pressedIconURL": "skin/IconButton_B887B10F_ACF6_41D1_41C0_3ABADFCB9292_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_B887B10F_ACF6_41D1_41C0_3ABADFCB9292.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "minHeight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_B887B10F_ACF6_41D1_41C0_3ABADFCB9292_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_B887B10F_ACF6_41D1_41C0_3ABADFCB9292",
   "data": {
    "name": "Button8707"
   },
   "minWidth": 0,
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "preloadEnabled": false,
  "buttonPlayRight": {
   "pressedIconURL": "skin/IconButton_B887110F_ACF6_41D1_41D8_1F72B26C6770_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_B887110F_ACF6_41D1_41D8_1F72B26C6770.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "minHeight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_B887110F_ACF6_41D1_41D8_1F72B26C6770_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_B887110F_ACF6_41D1_41D8_1F72B26C6770",
   "data": {
    "name": "Button8713"
   },
   "minWidth": 0,
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "buttonMoveDown": {
   "pressedIconURL": "skin/IconButton_B887510F_ACF6_41D1_41D5_F54C31543830_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_B887510F_ACF6_41D1_41D5_F54C31543830.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "minHeight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_B887510F_ACF6_41D1_41D5_F54C31543830_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_B887510F_ACF6_41D1_41D5_F54C31543830",
   "data": {
    "name": "Button8711"
   },
   "minWidth": 0,
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  }
 },
 {
  "viewerArea": {
   "shadow": false,
   "paddingLeft": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "paddingRight": 0,
   "progressBackgroundOpacity": 1,
   "playbackBarBorderRadius": 4,
   "playbackBarOpacity": 1,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipTextShadowBlurRadius": 3,
   "progressBarOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBottom": 2,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeight": 20,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "progressBorderRadius": 4,
   "toolTipShadowBlurRadius": 3,
   "progressBorderSize": 2,
   "progressHeight": 20,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColorDirection": "vertical",
   "progressLeft": 10,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "toolTipPaddingTop": 4,
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressOpacity": 1,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "minWidth": 1,
   "borderSize": 0,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarRight": 0,
   "progressBarBorderSize": 0,
   "playbackBarBorderSize": 2,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarBackgroundOpacity": 1,
   "transitionDuration": 500,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarLeft": 0,
   "paddingTop": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipShadowSpread": 0,
   "playbackBarBorderColor": "#AAAAAA",
   "width": "93.309%",
   "minHeight": 1,
   "height": "92.121%",
   "toolTipBorderSize": 1,
   "paddingBottom": 0,
   "playbackBarHeadHeight": 30,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "toolTipPaddingLeft": 6,
   "toolTipFontSize": 12,
   "progressBackgroundColorDirection": "vertical",
   "class": "ViewerArea",
   "toolTipDisplayTime": 600,
   "toolTipFontColor": "#606060",
   "playbackBarProgressBorderSize": 0,
   "toolTipShadowOpacity": 1,
   "progressBarBorderRadius": 4,
   "progressBarBorderColor": "#000000",
   "propagateClick": false,
   "bottom": "1.52%",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "playbackBarBottom": 0,
   "progressOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "progressRight": 10,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000",
   "id": "MapViewer",
   "playbackBarHeadShadow": true,
   "left": "2.6%",
   "playbackBarHeadOpacity": 1,
   "transitionMode": "blending",
   "toolTipFontFamily": "Arial",
   "toolTipPaddingBottom": 4,
   "borderRadius": 0,
   "toolTipTextShadowOpacity": 0,
   "progressBorderColor": "#AAAAAA",
   "playbackBarHeadBorderSize": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipShadowHorizontalLength": 0
  },
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "buttonZoomOut": "this.IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919",
  "class": "MapPlayer",
  "buttonZoomIn": "this.IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228"
 },
 {
  "id": "panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31",
 {
  "id": "panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202",
 {
  "id": "panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "backwardYaw": 0.92,
    "yaw": -30.08,
    "class": "AdjacentPanorama",
    "panorama": {
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "backwardYaw": -30.08,
       "yaw": 0.92,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3"
      }
     ],
     "id": "panorama_A208C57F_ABFE_4031_41E4_B3274C95448F",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_BC670470_AC16_404F_41DE_00E3690C34F1",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3, this.camera_AFCA98D8_A43D_0227_41D5_B4704850BE29); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 18.9,
           "yaw": 0.92,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 287,
              "width": 287,
              "url": "media/panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -23.87
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_B3D7C406_AC16_47D3_41E0_9C11026D585D",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.showWindow(this.window_B3DD24E4_AC16_C057_41E0_8CD74C71B563, null, false)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "hfov": 5.32,
           "yaw": -93.35,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 142,
              "width": 145,
              "url": "media/panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 59.52
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_A208C57F_ABFE_4031_41E4_B3274C95448F.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfovMax": 120,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_t.jpg",
     "mapLocations": [
      {
       "x": 326.5,
       "map": {
        "initialZoomFactor": 1,
        "maximumZoomFactor": 1.2,
        "fieldOfViewOverlayOutsideOpacity": 0,
        "overlays": [
         {
          "rollOverDisplay": false,
          "id": "overlay_BA5170E2_AC12_4053_41CE_01F1D67B717E",
          "class": "AreaHotspotMapOverlay",
          "data": {
           "label": "Image"
          },
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 5)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "image": {
           "x": 197,
           "y": 369,
           "width": 32,
           "class": "HotspotMapOverlayImage",
           "height": 25,
           "image": {
            "levels": [
             {
              "height": 25,
              "width": 32,
              "url": "media/map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF_HS_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "map": {
           "offsetY": 0,
           "x": 197,
           "width": 32,
           "class": "HotspotMapOverlayMap",
           "height": 25,
           "offsetX": 0,
           "image": {
            "levels": [
             {
              "height": 12,
              "width": 16,
              "url": "media/map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF_HS_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "y": 369
          },
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_BAF5A537_AC1D_C031_41D9_C7205A5FEF3B",
          "class": "AreaHotspotMapOverlay",
          "data": {
           "label": "Image"
          },
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 4)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "image": {
           "x": 312,
           "y": 217,
           "width": 29,
           "class": "HotspotMapOverlayImage",
           "height": 25,
           "image": {
            "levels": [
             {
              "height": 25,
              "width": 29,
              "url": "media/map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF_HS_1.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "map": {
           "offsetY": 0,
           "x": 312,
           "width": 29,
           "class": "HotspotMapOverlayMap",
           "height": 25,
           "offsetX": 0,
           "image": {
            "levels": [
             {
              "height": 12,
              "width": 14,
              "url": "media/map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF_HS_1_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "y": 217
          },
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_BAE49099_AC1E_C0F1_41E4_073A98E39646",
          "class": "AreaHotspotMapOverlay",
          "data": {
           "label": "Image"
          },
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 3)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "image": {
           "x": 252,
           "y": 174,
           "width": 34,
           "class": "HotspotMapOverlayImage",
           "height": 21,
           "image": {
            "levels": [
             {
              "height": 21,
              "width": 34,
              "url": "media/map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF_HS_2.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "map": {
           "offsetY": 0,
           "x": 252,
           "width": 34,
           "class": "HotspotMapOverlayMap",
           "height": 21,
           "offsetX": 0,
           "image": {
            "levels": [
             {
              "height": 10,
              "width": 17,
              "url": "media/map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF_HS_2_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "y": 174
          },
          "useHandCursor": true
         }
        ],
        "fieldOfViewOverlayOutsideColor": "#000000",
        "width": 383,
        "id": "map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF",
        "height": 425,
        "fieldOfViewOverlayInsideOpacity": 0.4,
        "image": {
         "levels": [
          {
           "height": 425,
           "width": 383,
           "url": "media/map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF.png",
           "class": "ImageResourceLevel"
          },
          {
           "height": 212,
           "grayscale": true,
           "width": 191,
           "url": "media/map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF_lq.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "thumbnailUrl": "media/map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF_t.png",
        "fieldOfViewOverlayRadiusScale": 0.3,
        "fieldOfViewOverlayInsideColor": "#FFFFFF",
        "minimumZoomFactor": 0.5,
        "label": "floor-francais",
        "scaleMode": "fit_inside",
        "class": "Map"
       },
       "y": 229.5,
       "angle": 270,
       "class": "PanoramaMapLocation"
      }
     ],
     "label": "2018-04-29 (2)",
     "partial": false,
     "class": "Panorama",
     "vfov": 180,
     "hfovMin": 60
    }
   },
   {
    "distance": 1,
    "backwardYaw": 64.33,
    "yaw": 92.64,
    "class": "AdjacentPanorama",
    "panorama": {
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "backwardYaw": 92.64,
       "yaw": 64.33,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3"
      }
     ],
     "id": "panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_B0FFA5D1_AC72_C071_41D7_E233F051FE5C",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3, this.camera_AFFC6898_A43D_0227_41BF_6B735C3B9472); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 8.38,
           "yaw": 64.33,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 96,
              "width": 116,
              "url": "media/panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.61
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfovMax": 120,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A_t.jpg",
     "mapLocations": [
      {
       "x": 213,
       "map": "this.map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF",
       "y": 381.5,
       "angle": 48.72,
       "class": "PanoramaMapLocation"
      }
     ],
     "label": "2018-04-29 (3)",
     "partial": false,
     "class": "Panorama",
     "vfov": 180,
     "hfovMin": 60
    }
   }
  ],
  "audios": [
   {
    "id": "audio_B87C9DF8_AC16_C03F_41D0_C8B539321DD2",
    "class": "PanoramaAudio",
    "audio": {
     "oggUrl": "media/audio_B87C9DF8_AC16_C03F_41D0_C8B539321DD2.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_B87C9DF8_AC16_C03F_41D0_C8B539321DD2.mp3"
    },
    "data": {
     "label": "french1"
    },
    "autoplay": true
   }
  ],
  "id": "panorama_A20881B3_ABFD_C030_41DC_60549851B2B3",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_A25EBBC1_AC75_C051_41C5_95A735B971D3",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A208C57F_ABFE_4031_41E4_B3274C95448F, this.camera_A82CC92E_A43D_027B_41DA_44184EC60B6F); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 8.55,
        "yaw": -30.08,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 62,
           "width": 118,
           "url": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.48
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A26D8B6A_AC75_C053_41E5_6C734BFECB90",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A, this.camera_A8194951_A43D_0229_41DB_43BA91A1957E); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.07,
        "yaw": 92.64,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 113,
           "width": 289,
           "url": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.73
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B6A2F083_AC1E_40D1_41D8_B272AB63D321",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 6.39,
        "yaw": -173.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 79,
           "width": 90,
           "url": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.68
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B15BC73E_AC17_C033_41D7_8A992AB5334D",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.showWindow(this.window_B10D4105_AC16_41D1_41E3_E905EC3C9C30, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 12.75,
        "yaw": -120.1,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 180,
           "width": 198,
           "url": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 26.65
       }
      ]
     },
     {
      "hfov": 20.27,
      "vfov": 19.55,
      "video": {
       "height": 720,
       "width": 1280,
       "class": "VideoResource",
       "mp4Url": "media/video_F2378612_E02F_575A_41E1_E0DC7A9EE1DD.mp4"
      },
      "id": "overlay_F3D63C59_E037_7BD6_41E9_C3CAD787FCA4",
      "loop": true,
      "rotationX": -19.05,
      "roll": -1.09,
      "image": {
       "levels": [
        {
         "height": 720,
         "width": 1280,
         "url": "media/overlay_F3D63C59_E037_7BD6_41E9_C3CAD787FCA4_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": -2.1,
      "chromaThreshold": 0.41,
      "chromaSmoothing": 0.25,
      "yaw": -93.42,
      "videoVisibleOnStop": false,
      "pitch": 0.24,
      "chromaColor": "#00FF01",
      "enabledInCardboard": true,
      "blending": 0,
      "useHandCursor": false,
      "data": {
       "label": "Video"
      },
      "autoplay": false,
      "click": "this.overlay_F3D63C59_E037_7BD6_41E9_C3CAD787FCA4.play()",
      "class": "VideoPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_t.jpg",
  "mapLocations": [
   {
    "x": 269,
    "map": "this.map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF",
    "y": 184.5,
    "angle": 181.51,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "2018-04-29 (1)",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "id": "panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_A208C57F_ABFE_4031_41E4_B3274C95448F",
 {
  "id": "panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A",
 {
  "id": "panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "backwardYaw": -27.83,
    "yaw": -0.71,
    "class": "AdjacentPanorama",
    "panorama": {
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "backwardYaw": 60.75,
       "yaw": 92.03,
       "class": "AdjacentPanorama",
       "panorama": {
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "backwardYaw": 92.03,
          "yaw": 60.75,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9"
         }
        ],
        "id": "panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_B15AD511_AC75_C1F1_41E3_B4AB279EA061",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9, this.camera_AFEB58A8_A43D_0267_41CA_A79936F4BC8C); this.mainPlayList.set('selectedIndex', 8)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 10.2,
              "yaw": 60.75,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 153,
                 "width": 142,
                 "url": "media/panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 4.3
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "levels": [
            {
             "height": 2500,
             "width": 5000,
             "url": "media/panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "hfovMax": 120,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2_t.jpg",
        "mapLocations": [
         {
          "x": 193,
          "map": {
           "initialZoomFactor": 1,
           "maximumZoomFactor": 1.2,
           "fieldOfViewOverlayOutsideOpacity": 0,
           "overlays": [
            {
             "rollOverDisplay": false,
             "id": "overlay_B5615CBC_AC12_4037_41CB_36D26AD709C1",
             "class": "AreaHotspotMapOverlay",
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 7)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
              }
             ],
             "image": {
              "x": 183,
              "y": 368,
              "width": 20,
              "class": "HotspotMapOverlayImage",
              "height": 23,
              "image": {
               "levels": [
                {
                 "height": 22,
                 "width": 19,
                 "url": "media/map_B879690F_AC32_C1D1_41CE_7300DBCC7432_HS_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "map": {
              "offsetY": 0,
              "x": 183,
              "width": 20,
              "class": "HotspotMapOverlayMap",
              "height": 23,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 11,
                 "width": 9,
                 "url": "media/map_B879690F_AC32_C1D1_41CE_7300DBCC7432_HS_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "y": 368
             },
             "useHandCursor": true
            },
            {
             "rollOverDisplay": false,
             "id": "overlay_B46B10A9_AC12_40D1_41B4_ACE912B51FE0",
             "class": "AreaHotspotMapOverlay",
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 6)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
              }
             ],
             "image": {
              "x": 315,
              "y": 221,
              "width": 27,
              "class": "HotspotMapOverlayImage",
              "height": 21,
              "image": {
               "levels": [
                {
                 "height": 21,
                 "width": 27,
                 "url": "media/map_B879690F_AC32_C1D1_41CE_7300DBCC7432_HS_1.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "map": {
              "offsetY": 0,
              "x": 315,
              "width": 27,
              "class": "HotspotMapOverlayMap",
              "height": 21,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 10,
                 "width": 13,
                 "url": "media/map_B879690F_AC32_C1D1_41CE_7300DBCC7432_HS_1_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "y": 221
             },
             "useHandCursor": true
            },
            {
             "rollOverDisplay": false,
             "id": "overlay_B438AB80_AC12_C0CF_41E2_9B83ED8690FE",
             "class": "AreaHotspotMapOverlay",
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 8)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
              }
             ],
             "image": {
              "x": 263,
              "y": 174,
              "width": 21,
              "class": "HotspotMapOverlayImage",
              "height": 20,
              "image": {
               "levels": [
                {
                 "height": 20,
                 "width": 21,
                 "url": "media/map_B879690F_AC32_C1D1_41CE_7300DBCC7432_HS_2.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "map": {
              "offsetY": 0,
              "x": 263,
              "width": 21,
              "class": "HotspotMapOverlayMap",
              "height": 20,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 10,
                 "width": 10,
                 "url": "media/map_B879690F_AC32_C1D1_41CE_7300DBCC7432_HS_2_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "y": 174
             },
             "useHandCursor": true
            }
           ],
           "fieldOfViewOverlayOutsideColor": "#000000",
           "width": 383,
           "id": "map_B879690F_AC32_C1D1_41CE_7300DBCC7432",
           "height": 425,
           "fieldOfViewOverlayInsideOpacity": 0.4,
           "image": {
            "levels": [
             {
              "height": 425,
              "width": 383,
              "url": "media/map_B879690F_AC32_C1D1_41CE_7300DBCC7432.png",
              "class": "ImageResourceLevel"
             },
             {
              "height": 212,
              "grayscale": true,
              "width": 191,
              "url": "media/map_B879690F_AC32_C1D1_41CE_7300DBCC7432_lq.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "thumbnailUrl": "media/map_B879690F_AC32_C1D1_41CE_7300DBCC7432_t.png",
           "fieldOfViewOverlayRadiusScale": 0.3,
           "fieldOfViewOverlayInsideColor": "#FFFFFF",
           "minimumZoomFactor": 0.5,
           "label": "floor-anglais",
           "scaleMode": "fit_inside",
           "class": "Map"
          },
          "y": 379.5,
          "angle": 48.04,
          "class": "PanoramaMapLocation"
         }
        ],
        "label": "tres",
        "partial": false,
        "class": "Panorama",
        "vfov": 180,
        "hfovMin": 60
       }
      },
      {
       "distance": 1,
       "backwardYaw": -0.71,
       "yaw": -27.83,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98"
      }
     ],
     "audios": [
      {
       "id": "audio_B9032BA1_AC12_40D1_41DA_745FA4ECA2C8",
       "class": "PanoramaAudio",
       "audio": {
        "oggUrl": "media/audio_B9032BA1_AC12_40D1_41DA_745FA4ECA2C8.ogg",
        "class": "AudioResource",
        "mp3Url": "media/audio_B9032BA1_AC12_40D1_41DA_745FA4ECA2C8.mp3"
       },
       "data": {
        "label": "speech1-English"
       },
       "autoplay": true
      }
     ],
     "id": "panorama_A208168A_ABFE_40D3_41D7_442C746690F9",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_A16C9880_AC76_40CF_41A1_2FB702A3AFE2",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98, this.camera_AF8E1879_A43D_02D9_41E1_018B3A603006); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 10.58,
           "yaw": -27.83,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 45,
              "width": 147,
              "url": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -4.09
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_A2A933D5_AC76_C071_41D3_2487C50D2D91",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2, this.camera_AF95E863_A43D_02E9_41D9_72D5F5E80E48); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 19.09,
           "yaw": 92.03,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 125,
              "width": 283,
              "url": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -20.86
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_B1432B4D_AC1E_4051_419B_FEFB5DB5E3B8",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "hfov": 6.85,
           "yaw": -172.84,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 90,
              "width": 96,
              "url": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 9.82
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_B12F1EDF_AC12_C071_41DB_1DCA51D2E359",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.showWindow(this.window_B11F72AB_AC12_40D1_41D0_C49D78CC6726, null, false)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "hfov": 10.24,
           "yaw": -125.21,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 162,
              "width": 158,
              "url": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 26.04
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfovMax": 120,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_t.jpg",
     "mapLocations": [
      {
       "x": 273.5,
       "map": "this.map_B879690F_AC32_C1D1_41CE_7300DBCC7432",
       "y": 184,
       "angle": 178.45,
       "class": "PanoramaMapLocation"
      }
     ],
     "label": "uno",
     "partial": false,
     "class": "Panorama",
     "vfov": 180,
     "hfovMin": 60
    }
   }
  ],
  "id": "panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_BC03FBC4_AC16_C057_41E2_F27E80ECD7FB",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9, this.camera_AFE018B8_A43D_0267_41E3_2BB37F6482AF); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 18.78,
        "yaw": -0.71,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 287,
           "width": 287,
           "url": "media/panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.69
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B3E8B783_AC13_C0D1_41E4_3029619F1BE0",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.showWindow(this.window_B3E4431C_AC13_C1F7_41B8_C4A543AE3B80, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 5.2,
        "yaw": -94.57,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 107,
           "width": 134,
           "url": "media/panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 57.48
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_t.jpg",
  "mapLocations": [
   {
    "x": 328.5,
    "map": "this.map_B879690F_AC32_C1D1_41CE_7300DBCC7432",
    "y": 231.5,
    "angle": -85.5,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "dos",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "id": "panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2",
 {
  "id": "panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9",
 {
  "id": "panorama_A208168A_ABFE_40D3_41D7_442C746690F9_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_t.png",
  "playList": {
   "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "media": {
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_1_t.jpg",
      "label": "IMG-20200319-WA0038",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_1",
      "class": "Photo",
      "height": 720,
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.47",
       "class": "PhotoCameraPosition",
       "y": "0.62"
      },
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_3_t.jpg",
      "label": "IMG-20200319-WA0040",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_3",
      "class": "Photo",
      "height": 720,
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_3.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.29",
       "class": "PhotoCameraPosition",
       "y": "0.36"
      },
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_4_t.jpg",
      "label": "IMG-20200319-WA0041",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_4",
      "class": "Photo",
      "height": 720,
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_4.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.36",
       "class": "PhotoCameraPosition",
       "y": "0.61"
      },
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_5_t.jpg",
      "label": "IMG-20200319-WA0042",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_5",
      "class": "Photo",
      "height": 720,
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_5.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.55",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_6_t.jpg",
      "label": "IMG-20200319-WA0043",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_6",
      "class": "Photo",
      "height": 720,
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_6.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.56",
       "class": "PhotoCameraPosition",
       "y": "0.27"
      },
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_7_t.jpg",
      "label": "IMG-20200319-WA0063",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_7",
      "class": "Photo",
      "height": 720,
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_7.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.28",
       "class": "PhotoCameraPosition",
       "y": "0.51"
      },
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_8_t.jpg",
      "label": "IMG-20200319-WA0068",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_8",
      "class": "Photo",
      "height": 720,
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_8.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.72",
       "class": "PhotoCameraPosition",
       "y": "0.74"
      },
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_9_t.jpg",
      "label": "IMG-20200319-WA0074",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_9",
      "class": "Photo",
      "height": 720,
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_9.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.30",
       "class": "PhotoCameraPosition",
       "y": "0.41"
      },
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_10_t.jpg",
      "label": "IMG-20200319-WA0075",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_10",
      "class": "Photo",
      "height": 720,
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_10.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.52",
       "class": "PhotoCameraPosition",
       "y": "0.56"
      },
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_11_t.jpg",
      "label": "IMG-20200319-WA0076",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_11",
      "class": "Photo",
      "height": 720,
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_11.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.54",
       "class": "PhotoCameraPosition",
       "y": "0.39"
      },
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_12_t.jpg",
      "label": "IMG-20200319-WA0079",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_12",
      "class": "Photo",
      "height": 720,
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_12.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.56",
       "class": "PhotoCameraPosition",
       "y": "0.35"
      },
      "class": "MovementPhotoCamera"
     }
    }
   ]
  },
  "label": "Salle-TP",
  "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC",
  "class": "PhotoAlbum"
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPhotoAlbumPlayer",
  "buttonRestart": "this.IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE",
  "class": "PhotoAlbumPlayer",
  "buttonPause": "this.IconButton_B887610F_ACF6_41D1_41DD_18CA17947F60"
 },
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_1",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_3",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_4",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_5",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_6",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_7",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_8",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_9",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_10",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_11",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_12",
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_AF9B283F_A43D_0259_41D7_49B8443AE17F",
    "media": "this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF9B283F_A43D_0259_41D7_49B8443AE17F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "id": "PanoramaPlayListItem_AF9BA840_A43D_0227_41E2_A070A803EF89",
    "media": "this.panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF9BA840_A43D_0227_41E2_A070A803EF89, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "id": "PanoramaPlayListItem_AF9A1840_A43D_0227_41E0_8EE9A77F39AF",
    "media": "this.panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF9A1840_A43D_0227_41E0_8EE9A77F39AF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "id": "PanoramaPlayListItem_AF9A4841_A43D_0229_41E1_F9AABEBC739A",
    "media": "this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF9A4841_A43D_0229_41E1_F9AABEBC739A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "id": "PanoramaPlayListItem_AF9AB841_A43D_0229_41BE_A10C77328484",
    "media": "this.panorama_A208C57F_ABFE_4031_41E4_B3274C95448F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF9AB841_A43D_0229_41BE_A10C77328484, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "id": "PanoramaPlayListItem_AF991842_A43D_022B_41C3_9CFE6EB34C40",
    "media": "this.panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF991842_A43D_022B_41C3_9CFE6EB34C40, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "id": "PanoramaPlayListItem_AF995842_A43D_022B_41C5_4A11C6D4A305",
    "media": "this.panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF995842_A43D_022B_41C5_4A11C6D4A305, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "id": "PanoramaPlayListItem_AF998842_A43D_0228_41B1_1BD33DDBB9B5",
    "media": "this.panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF998842_A43D_0228_41B1_1BD33DDBB9B5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "id": "PanoramaPlayListItem_AF99F842_A43D_0228_41DF_3456913E8ADB",
    "media": "this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF99F842_A43D_0228_41DF_3456913E8ADB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 "this.map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903",
 "this.map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF",
 "this.map_B879690F_AC32_C1D1_41CE_7300DBCC7432",
 {
  "id": "DropDown_BA5205B3_AC3F_C031_41B3_43AD6399C6BA_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B879690F_AC32_C1D1_41CE_7300DBCC7432",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_BD3727AA_B131_7205_41B4_A07A6A060125_t.jpg",
  "label": "INTRO2",
  "video": {
   "width": 1920,
   "class": "VideoResource",
   "height": 1080,
   "mp4Url": "media/video_BD3727AA_B131_7205_41B4_A07A6A060125.mp4"
  },
  "width": 1920,
  "id": "video_BD3727AA_B131_7205_41B4_A07A6A060125",
  "class": "Video",
  "height": 1080,
  "scaleMode": "fit_inside",
  "loop": false
 },
 {
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "buttonRestart": "this.IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE",
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "buttonPause": "this.IconButton_B887610F_ACF6_41D1_41DD_18CA17947F60"
 },
 {
  "id": "playList_AFA4583E_A43D_025B_41D2_47968B9182DE",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_BD3727AA_B131_7205_41B4_A07A6A060125",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_AFA4583E_A43D_025B_41D2_47968B9182DE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_AFA4583E_A43D_025B_41D2_47968B9182DE, 0, this.video_BD3727AA_B131_7205_41B4_A07A6A060125)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_D1E9CD27_DC97_BF5F_41E1_9E64D15B1F9E_t.jpg",
  "label": "2020-05-04 00-27-08",
  "video": {
   "height": 720,
   "width": 1280,
   "class": "VideoResource",
   "mp4Url": "media/video_D1E9CD27_DC97_BF5F_41E1_9E64D15B1F9E.mp4"
  },
  "width": 1280,
  "id": "video_D1E9CD27_DC97_BF5F_41E1_9E64D15B1F9E",
  "class": "Video",
  "height": 720,
  "scaleMode": "fit_inside",
  "loop": false
 },
 {
  "id": "playList_AFA4483E_A43D_025B_41D1_45B808C535E9",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_D1E9CD27_DC97_BF5F_41E1_9E64D15B1F9E",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_AFA4483E_A43D_025B_41D1_45B808C535E9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_AFA4483E_A43D_025B_41D1_45B808C535E9, 0, this.video_D1E9CD27_DC97_BF5F_41E1_9E64D15B1F9E)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_D1E806EE_DC9C_8AD1_41B7_D2D2302FD2AF_t.jpg",
  "label": "2020-05-04 00-27-08",
  "video": {
   "height": 720,
   "width": 1280,
   "class": "VideoResource",
   "mp4Url": "media/video_D1E806EE_DC9C_8AD1_41B7_D2D2302FD2AF.mp4"
  },
  "width": 1280,
  "id": "video_D1E806EE_DC9C_8AD1_41B7_D2D2302FD2AF",
  "class": "Video",
  "height": 720,
  "scaleMode": "fit_inside",
  "loop": false
 },
 {
  "id": "playList_AFA4683E_A43D_025B_41E3_FC1DFE22B93C",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_D1E806EE_DC9C_8AD1_41B7_D2D2302FD2AF",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_AFA4683E_A43D_025B_41E3_FC1DFE22B93C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_AFA4683E_A43D_025B_41E3_FC1DFE22B93C, 0, this.video_D1E806EE_DC9C_8AD1_41B7_D2D2302FD2AF)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_D1794217_DC9C_857F_41AD_B91B5CC1FC6B_t.jpg",
  "label": "2020-04-26 13-23-51",
  "video": {
   "height": 614,
   "width": 1092,
   "class": "VideoResource",
   "mp4Url": "media/video_D1794217_DC9C_857F_41AD_B91B5CC1FC6B.mp4"
  },
  "width": 1092,
  "id": "video_D1794217_DC9C_857F_41AD_B91B5CC1FC6B",
  "class": "Video",
  "height": 614,
  "scaleMode": "fit_inside",
  "loop": false
 },
 {
  "id": "playList_AFA4983F_A43D_0259_41E3_3400BA4CE96B",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_D1794217_DC9C_857F_41AD_B91B5CC1FC6B",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_AFA4983F_A43D_0259_41E3_3400BA4CE96B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_AFA4983F_A43D_0259_41E3_3400BA4CE96B, 0, this.video_D1794217_DC9C_857F_41AD_B91B5CC1FC6B)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_D203FA45_DC9C_85D3_41C1_DB23DABA7E80_t.jpg",
  "label": "2020-04-26 13-23-51",
  "video": {
   "height": 614,
   "width": 1092,
   "class": "VideoResource",
   "mp4Url": "media/video_D203FA45_DC9C_85D3_41C1_DB23DABA7E80.mp4"
  },
  "width": 1092,
  "id": "video_D203FA45_DC9C_85D3_41C1_DB23DABA7E80",
  "class": "Video",
  "height": 614,
  "scaleMode": "fit_inside",
  "loop": false
 },
 {
  "id": "playList_AFA4B83F_A43D_0259_41E4_5BE54CD91C7E",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_D203FA45_DC9C_85D3_41C1_DB23DABA7E80",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_AFA4B83F_A43D_0259_41E4_5BE54CD91C7E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_AFA4B83F_A43D_0259_41E4_5BE54CD91C7E, 0, this.video_D203FA45_DC9C_85D3_41C1_DB23DABA7E80)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_F2378612_E02F_575A_41E1_E0DC7A9EE1DD_t.jpg",
  "label": "green",
  "video": {
   "height": 720,
   "width": 1280,
   "class": "VideoResource",
   "mp4Url": "media/video_F2378612_E02F_575A_41E1_E0DC7A9EE1DD.mp4"
  },
  "width": 1280,
  "id": "video_F2378612_E02F_575A_41E1_E0DC7A9EE1DD",
  "class": "Video",
  "height": 720,
  "scaleMode": "fit_inside",
  "loop": false
 },
 {
  "id": "playList_AFA4A83F_A43D_0259_41E1_78526516ADB4",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_F2378612_E02F_575A_41E1_E0DC7A9EE1DD",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_AFA4A83F_A43D_0259_41E1_78526516ADB4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_AFA4A83F_A43D_0259_41E1_78526516ADB4, 0, this.video_F2378612_E02F_575A_41E1_E0DC7A9EE1DD)"
   }
  ]
 },
 {
  "closeButtonRollOverIconColor": "#FFFFFF",
  "footerHeight": 5,
  "shadow": true,
  "paddingLeft": 0,
  "backgroundColor": [],
  "paddingRight": 0,
  "veilOpacity": 0.4,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontSize": 14,
  "veilColorDirection": "horizontal",
  "titleTextDecoration": "none",
  "footerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBorderSize": 0,
  "shadowVerticalLength": 0,
  "backgroundColorRatios": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingRight": 0,
  "layout": "vertical",
  "closeButtonIconColor": "#000000",
  "title": "\u0627\u0644\u0627\u062f\u0631\u0627\u0629",
  "headerVerticalAlign": "middle",
  "bodyPaddingTop": 5,
  "shadowHorizontalLength": 3,
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarOpacity": 0.5,
  "titlePaddingBottom": 5,
  "scrollBarColor": "#000000",
  "shadowColor": "#000000",
  "closeButtonIconWidth": 12,
  "titleFontColor": "#000000",
  "minWidth": 20,
  "closeButtonPaddingBottom": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonBackgroundColorDirection": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadowSpread": 1,
  "borderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingBottom": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "titleFontWeight": "normal",
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "paddingTop": 0,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "titlePaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "closeButtonBackgroundColorRatios": [],
  "overflow": "scroll",
  "width": 400,
  "bodyBorderColor": "#000000",
  "children": [
   {
    "shadow": false,
    "paddingLeft": 0,
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "url": "media/photo_B63E45C0_AC12_404F_41C5_EF9FFDF7CE84.jpg",
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "propagateClick": false,
    "horizontalAlign": "center",
    "id": "image_uidAFAAC80F_A43D_0239_41E3_55C27B93F8DC_0",
    "data": {
     "name": "Image1161"
    },
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 0
   },
   {
    "shadow": false,
    "paddingLeft": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 10,
    "minHeight": 0,
    "paddingBottom": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "id": "htmlText_uidAFAAC80F_A43D_0239_41E3_55C27B93F8DC",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0627\u0644\u0627\u062f\u0631\u0627\u0629 -\u0645\u0643\u062a\u0628 \u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644</SPAN></DIV></div>",
    "data": {
     "name": "HTMLText1162"
    },
    "scrollBarColor": "#000000",
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 10
   }
  ],
  "headerPaddingTop": 10,
  "height": 600,
  "closeButtonPaddingLeft": 0,
  "minHeight": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderRadius": 11,
  "bodyBackgroundOpacity": 1,
  "closeButtonIconHeight": 12,
  "titlePaddingRight": 5,
  "footerBorderColor": "#000000",
  "titlePaddingTop": 5,
  "closeButtonBackgroundOpacity": 1,
  "paddingBottom": 0,
  "shadowOpacity": 0.5,
  "scrollBarWidth": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "class": "Window",
  "closeButtonPaddingTop": 0,
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyPaddingLeft": 5,
  "headerPaddingLeft": 10,
  "propagateClick": false,
  "veilColorRatios": [
   0,
   1
  ],
  "headerBorderSize": 0,
  "horizontalAlign": "center",
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingRight": 10,
  "headerPaddingBottom": 10,
  "contentOpaque": false,
  "closeButtonBackgroundColor": [],
  "id": "window_B1438CBA_AC1D_C033_41C1_93B3BA246B41",
  "titleFontStyle": "normal",
  "bodyBorderSize": 0,
  "data": {
   "name": "Window44383"
  },
  "footerBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "headerBorderColor": "#000000",
  "backgroundOpacity": 1,
  "scrollBarVisible": "rollOver",
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ]
 },
 {
  "closeButtonRollOverIconColor": "#FFFFFF",
  "footerHeight": 5,
  "shadow": true,
  "paddingLeft": 0,
  "backgroundColor": [],
  "paddingRight": 0,
  "veilOpacity": 0.4,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontSize": 14,
  "veilColorDirection": "horizontal",
  "titleTextDecoration": "none",
  "shadowVerticalLength": 0,
  "modal": true,
  "backgroundColorRatios": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "title": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u062f\u064a\u0631",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "closeButtonIconColor": "#000000",
  "shadowHorizontalLength": 3,
  "headerVerticalAlign": "middle",
  "bodyPaddingTop": 5,
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarOpacity": 0.5,
  "titlePaddingBottom": 5,
  "scrollBarColor": "#000000",
  "shadowColor": "#000000",
  "closeButtonIconWidth": 12,
  "titleFontColor": "#000000",
  "minWidth": 20,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadowSpread": 1,
  "borderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingBottom": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "titleFontWeight": "normal",
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "paddingTop": 0,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "titlePaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "closeButtonBackgroundColorRatios": [],
  "overflow": "scroll",
  "width": 600,
  "bodyBorderColor": "#000000",
  "children": [
   {
    "shadow": false,
    "paddingLeft": 0,
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "url": "media/photo_B3563C3B_AC0E_4031_41D5_7AC856FCC4F1.jpg",
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "propagateClick": false,
    "horizontalAlign": "center",
    "id": "image_uidAFA2E812_A43D_022B_41D0_D03534360CC2_0",
    "data": {
     "name": "Image1163"
    },
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 0
   },
   {
    "shadow": false,
    "paddingLeft": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 10,
    "minHeight": 0,
    "paddingBottom": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "id": "htmlText_uidAFA2E812_A43D_022B_41D0_D03534360CC2",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u0648\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u062f\u0631\u0633\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0644\u0644\u0639\u0644\u0648\u0645 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u064a\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0628\u0627\u0644\u062c\u0627\u0645\u0639\u0629- ENSAJ- \u0641\u064a \u062c\u0627\u0645\u0639\u0629 \u0634\u0639\u064a\u0628 \u062f\u0643\u0627\u0644\u064a- UCD- \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u060c \u0642\u0644\u0628 \u062d\u0648\u0636 \u0635\u0646\u0627\u0639\u064a \u0645\u0647\u0645 \u064a\u0645\u062a\u062f \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u062a\u0644\u0628\u064a\u0629 \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u064a\u0646\u0645\u0648 \u0641\u064a \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0647\u0646\u062f\u0633\u064a \u0641\u064a \u0628\u0644\u0627\u062f\u0646\u0627</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u0627\u0633\u062a\u0641\u0627\u062f\u0629 \u0645\u0646 \u0645\u062b\u0644 \u0647\u0630\u0647 \u0627\u0644\u0628\u064a\u0626\u0629 \u060c \u062a\u062a\u0645\u062b\u0644 \u0645\u0647\u0645\u0629 ENSAJ \u0641\u064a \u0627\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u062a\u0648\u0641\u064a\u0631 \u0639\u0631\u0636 \u062a\u062f\u0631\u064a\u062c\u064a \u062a\u062f\u0631\u064a\u0628\u064a \u0641\u064a \u0643\u0641\u0627\u064a\u0629 \u062f\u0627\u0626\u0645\u0629 \u0645\u0639 \u0627\u0644\u0645\u0647\u0646 \u0648\u0627\u0644\u0645\u0647\u0646 \u0627\u0644\u0646\u0627\u062a\u062c\u0629 \u0639\u0646 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0648\u0627\u0644\u062f\u0648\u0644\u064a\u0629 \u060c \u0644\u062d\u0642\u0646 \u0627\u0644\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629 \u0644\u0644\u0628\u062d\u062b \u0627\u0644\u0639\u0644\u0645\u064a.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0644\u0625\u0646\u062c\u0627\u0632 \u0647\u0630\u0647 \u0627\u0644\u0645\u0647\u0645\u0629 \u060c \u062a\u0628\u0646\u064a ENSAJ \u0639\u0645\u0644\u0647\u0627 \u0639\u0644\u0649 \u062b\u0644\u0627\u062b\u0629 \u0631\u0627\u0641\u0639\u0627\u062a \u0623\u0633\u0627\u0633\u064a\u0629:</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629 \u0641\u0631\u0642\u0647\u0627 \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629 \u0627\u0644\u062a\u064a \u0644\u0627 \u064a\u0645\u0643\u0646 \u0625\u0646\u0643\u0627\u0631\u0647\u0627</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0648\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0627\u0644\u0634\u0631\u0627\u0643\u0629 \u0645\u0639 \u0627\u0644\u0639\u0627\u0645\u0644\u064a\u0646 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u064a\u0646 \u0648\u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u064a\u0646</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645 \u0648\u0631\u0648\u062d \u0627\u0644\u0627\u0646\u062a\u0645\u0627\u0621 \u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0647\u0646\u062f\u0633\u0629</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0631\u0627\u0641\u0639\u0627\u062a \u060c \u062a\u0644\u062a\u0632\u0645 ENSAJ \u0628\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0636\u0645\u0627\u0646 \u0636\u0645\u0627\u0646 \u0627\u0644\u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0645\u0633\u062a\u062f\u0627\u0645\u0629 \u0644\u0644\u0645\u062f\u0631\u0633\u0629 \u060c \u0648\u062a\u0631\u0633\u064a\u062e \u0648\u062a\u0631\u0633\u064a\u062e \u0631\u0633\u0648\u062e\u0647\u0627 \u0641\u064a \u0627\u0644\u0646\u0633\u064a\u062c \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a \u0648\u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a \u0648\u0627\u0644\u062b\u0642\u0627\u0641\u064a \u060c \u0644\u0645\u0648\u0627\u0635\u0644\u0629 \u062a\u0639\u0632\u064a\u0632 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0648\u0627\u0644\u0628\u062d\u062b \u0627\u0644\u0639\u0644\u0645\u064a \u0641\u064a \u0645\u0631\u062a\u0628\u0629 \u0627\u0644\u0627\u0645\u062a\u064a\u0627\u0632 \u0648\u0627\u0644\u0627\u0646\u0641\u062a\u0627\u062d \u0623\u0643\u062b\u0631 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u062d\u0629 \u0627\u0644\u062f\u0648\u0644\u064a\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u062f\u0639\u0645 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u0639 \u0645\u0647\u0646\u0629 \u0644\u0644\u062a\u062f\u0631\u064a\u0628 \u0648\u0627\u0644\u0628\u062d\u062b.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0641\u064a \u0646\u0647\u0627\u064a\u0629 \u062f\u0631\u0627\u0633\u062a\u0647\u0645 \u060c \u064a\u062c\u062f \u0637\u0644\u0627\u0628 \u0627\u0644\u0647\u0646\u062f\u0633\u0629 \u0641\u064a ENSAJ \u0623\u0646\u0641\u0633\u0647\u0645 \u0645\u0648\u0647\u0648\u0628\u064a\u0646 \u0628\u0645\u0647\u0627\u0631\u0627\u062a \u0639\u0644\u0645\u064a\u0629 \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062c\u0648\u062f\u0629 \u0648\u0631\u0648\u062d \u0645\u062f\u0646\u064a\u0629 \u0648\u062b\u0642\u0627\u0641\u0629 \u0639\u0627\u0645\u0629 \u0648\u0627\u0633\u0639\u0629 \u0648\u0645\u0639\u0631\u0641\u0629 \u062c\u064a\u062f\u0629 \u0628\u0627\u0644\u0634\u0631\u0643\u0629.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u062a\u062a\u064a\u062d \u0644\u0643 \u0632\u064a\u0627\u0631\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0643\u062a\u0634\u0627\u0641 \u0627\u0644\u0628\u064a\u0626\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0645\u0646\u0634\u0623\u0629 \u0648\u0643\u0630\u0644\u0643 \u062c\u0645\u064a\u0639 \u0623\u0646\u0634\u0637\u062a\u0647\u0627.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0645\u0631\u062d\u0628\u0627 !</SPAN></DIV></div>",
    "data": {
     "name": "HTMLText1164"
    },
    "scrollBarColor": "#000000",
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 10
   }
  ],
  "headerPaddingTop": 10,
  "height": 800,
  "bodyBackgroundOpacity": 1,
  "minHeight": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 12,
  "titlePaddingRight": 5,
  "titlePaddingTop": 5,
  "paddingBottom": 0,
  "shadowOpacity": 0.5,
  "scrollBarWidth": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "class": "Window",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyPaddingLeft": 5,
  "headerPaddingLeft": 10,
  "propagateClick": false,
  "veilColorRatios": [
   0,
   1
  ],
  "headerBorderSize": 0,
  "horizontalAlign": "center",
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingRight": 10,
  "headerPaddingBottom": 10,
  "contentOpaque": false,
  "closeButtonBackgroundColor": [],
  "id": "window_B3F114FA_AC0F_C033_41C6_E56443A7BD65",
  "titleFontStyle": "normal",
  "bodyBorderSize": 0,
  "data": {
   "name": "Window54242"
  },
  "footerBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "headerBorderColor": "#000000",
  "backgroundOpacity": 1,
  "scrollBarVisible": "rollOver",
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ]
 },
 {
  "closeButtonRollOverIconColor": "#FFFFFF",
  "footerHeight": 5,
  "shadow": true,
  "paddingLeft": 0,
  "backgroundColor": [],
  "paddingRight": 0,
  "veilOpacity": 0.4,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontSize": 14,
  "veilColorDirection": "horizontal",
  "titleTextDecoration": "none",
  "shadowVerticalLength": 0,
  "modal": true,
  "backgroundColorRatios": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "title": "Administration",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "closeButtonIconColor": "#000000",
  "shadowHorizontalLength": 3,
  "headerVerticalAlign": "middle",
  "bodyPaddingTop": 5,
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarOpacity": 0.5,
  "titlePaddingBottom": 5,
  "scrollBarColor": "#000000",
  "shadowColor": "#000000",
  "closeButtonIconWidth": 12,
  "titleFontColor": "#000000",
  "minWidth": 20,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadowSpread": 1,
  "borderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingBottom": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "titleFontWeight": "normal",
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "paddingTop": 0,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "titlePaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "closeButtonBackgroundColorRatios": [],
  "overflow": "scroll",
  "width": 400,
  "bodyBorderColor": "#000000",
  "children": [
   {
    "shadow": false,
    "paddingLeft": 0,
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "url": "media/photo_B63E45C0_AC12_404F_41C5_EF9FFDF7CE84.jpg",
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "propagateClick": false,
    "horizontalAlign": "center",
    "id": "image_uidAFA1B81F_A43D_0259_41C7_8E9B95BBFA00_0",
    "data": {
     "name": "Image1165"
    },
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 0
   },
   {
    "shadow": false,
    "paddingLeft": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 10,
    "minHeight": 0,
    "paddingBottom": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "id": "htmlText_uidAFA1B81F_A43D_0259_41C7_8E9B95BBFA00",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\"><B>R\u00e9ception</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "data": {
     "name": "HTMLText1166"
    },
    "scrollBarColor": "#000000",
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 10
   }
  ],
  "headerPaddingTop": 10,
  "height": 600,
  "bodyBackgroundOpacity": 1,
  "minHeight": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 12,
  "titlePaddingRight": 5,
  "titlePaddingTop": 5,
  "paddingBottom": 0,
  "shadowOpacity": 0.5,
  "scrollBarWidth": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "class": "Window",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyPaddingLeft": 5,
  "headerPaddingLeft": 10,
  "propagateClick": false,
  "veilColorRatios": [
   0,
   1
  ],
  "headerBorderSize": 0,
  "horizontalAlign": "center",
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingRight": 10,
  "headerPaddingBottom": 10,
  "contentOpaque": false,
  "closeButtonBackgroundColor": [],
  "id": "window_B10D4105_AC16_41D1_41E3_E905EC3C9C30",
  "titleFontStyle": "normal",
  "bodyBorderSize": 0,
  "data": {
   "name": "Window45761"
  },
  "footerBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "headerBorderColor": "#000000",
  "backgroundOpacity": 1,
  "scrollBarVisible": "rollOver",
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ]
 },
 {
  "closeButtonRollOverIconColor": "#FFFFFF",
  "footerHeight": 5,
  "shadow": true,
  "paddingLeft": 0,
  "backgroundColor": [],
  "paddingRight": 0,
  "veilOpacity": 0.4,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontSize": 14,
  "veilColorDirection": "horizontal",
  "titleTextDecoration": "none",
  "shadowVerticalLength": 0,
  "modal": true,
  "backgroundColorRatios": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "title": "Mot de Directeur",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "closeButtonIconColor": "#000000",
  "shadowHorizontalLength": 3,
  "headerVerticalAlign": "middle",
  "bodyPaddingTop": 5,
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarOpacity": 0.5,
  "titlePaddingBottom": 5,
  "scrollBarColor": "#000000",
  "shadowColor": "#000000",
  "closeButtonIconWidth": 12,
  "titleFontColor": "#000000",
  "minWidth": 20,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadowSpread": 1,
  "borderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingBottom": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "titleFontWeight": "normal",
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "paddingTop": 0,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "titlePaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "closeButtonBackgroundColorRatios": [],
  "overflow": "scroll",
  "width": 600,
  "bodyBorderColor": "#000000",
  "children": [
   {
    "shadow": false,
    "paddingLeft": 0,
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "url": "media/photo_B3563C3B_AC0E_4031_41D5_7AC856FCC4F1.jpg",
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "propagateClick": false,
    "horizontalAlign": "center",
    "id": "image_uidAFA07823_A43D_0269_41E4_6C2DE3BBB8AF_0",
    "data": {
     "name": "Image1167"
    },
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 0
   },
   {
    "shadow": false,
    "paddingLeft": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 10,
    "minHeight": 0,
    "paddingBottom": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "id": "htmlText_uidAFA07823_A43D_0269_41E4_6C2DE3BBB8AF",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">L\u2019Ecole Nationale des Sciences Appliqu\u00e9es d\u2019El Jadida -ENSAJ- a \u00e9t\u00e9 cr\u00e9\u00e9e et implant\u00e9e \u00e0 l\u2019Universit\u00e9 Chouaib Doukkali \u2013UCD- de la ville d\u2019El Jadida, c\u0153ur d\u2019un important bassin industriel en pleine extension pour r\u00e9pondre aux besoins croissants en formations d\u2019ing\u00e9nieurs dans notre pays</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">B\u00e9n\u00e9ficiant d\u2019un tel environnement, l\u2019ENSAJ a pour missions d\u2019\u0153uvrer \u00e0 dispenser une offre de formation \u00e9volutive en ad\u00e9quation permanente avec les m\u00e9tiers et professions g\u00e9n\u00e9r\u00e9s par les mutations \u00e9conomiques nationale et internationale, insuffler un dynamisme pour la recherche scientifique.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pour accomplir cette mission, l\u2019ENSAJ b\u00e2tit son action sur trois leviers essentiels :</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">le dynamisme incontestable de ses \u00e9quipes p\u00e9dagogique et administrative</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">les comp\u00e9tences locales, les moyens disponibles et les actions de partenariats d\u00e9velopp\u00e9es avec les op\u00e9rateurs socio\u00e9conomiques</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">l\u2019engagement et l\u2019esprit d\u2019appartenance des \u00e9l\u00e8ves ing\u00e9nieurs</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Se basant sur ces leviers l\u2019ENSAJ engage sa politique de gouvernance en visant \u00e0 assurer un d\u00e9veloppement p\u00e9renne de l\u2019\u00e9cole, \u00e0 assoir et consolider son ancrage dans le tissu socio-\u00e9conomique et culturel, \u00e0 promouvoir davantage la formation et la recherche scientifique au rang de l\u2019excellence et \u00e0 s\u2019ouvrir davantage \u00e0 l\u2019international par des projets d\u2019accompagnement \u00e0 vocation de formation et recherche.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Au terme de leur cursus, les \u00e9l\u00e8ves ing\u00e9nieurs de l\u2019ENSAJ se retrouvent alors dot\u00e9s de comp\u00e9tences scientifiques de qualit\u00e9, d\u2019un esprit citoyen, d\u2019une large culture g\u00e9n\u00e9rale et d\u2019une bonne connaissance de l\u2019entreprise.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">La visite du pr\u00e9sent site web vous permettra de d\u00e9couvrir l\u2019environnement g\u00e9n\u00e9ral de l\u2019\u00e9tablissement ainsi que l\u2019ensemble de ses activit\u00e9s.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bienvenue !</SPAN></DIV></div>",
    "data": {
     "name": "HTMLText1168"
    },
    "scrollBarColor": "#000000",
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 10
   }
  ],
  "headerPaddingTop": 10,
  "height": 800,
  "bodyBackgroundOpacity": 1,
  "minHeight": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 12,
  "titlePaddingRight": 5,
  "titlePaddingTop": 5,
  "paddingBottom": 0,
  "shadowOpacity": 0.5,
  "scrollBarWidth": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "class": "Window",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyPaddingLeft": 5,
  "headerPaddingLeft": 10,
  "propagateClick": false,
  "veilColorRatios": [
   0,
   1
  ],
  "headerBorderSize": 0,
  "horizontalAlign": "center",
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingRight": 10,
  "headerPaddingBottom": 10,
  "contentOpaque": false,
  "closeButtonBackgroundColor": [],
  "id": "window_B3DD24E4_AC16_C057_41E0_8CD74C71B563",
  "titleFontStyle": "normal",
  "bodyBorderSize": 0,
  "data": {
   "name": "Window56188"
  },
  "footerBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "headerBorderColor": "#000000",
  "backgroundOpacity": 1,
  "scrollBarVisible": "rollOver",
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ]
 },
 {
  "closeButtonRollOverIconColor": "#FFFFFF",
  "footerHeight": 5,
  "shadow": true,
  "paddingLeft": 0,
  "backgroundColor": [],
  "paddingRight": 0,
  "veilOpacity": 0.4,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontSize": 14,
  "veilColorDirection": "horizontal",
  "titleTextDecoration": "none",
  "shadowVerticalLength": 0,
  "modal": true,
  "backgroundColorRatios": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "title": "A word from the director",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "closeButtonIconColor": "#000000",
  "shadowHorizontalLength": 3,
  "headerVerticalAlign": "middle",
  "bodyPaddingTop": 5,
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarOpacity": 0.5,
  "titlePaddingBottom": 5,
  "scrollBarColor": "#000000",
  "shadowColor": "#000000",
  "closeButtonIconWidth": 12,
  "titleFontColor": "#000000",
  "minWidth": 20,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadowSpread": 1,
  "borderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingBottom": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "titleFontWeight": "normal",
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "paddingTop": 0,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "titlePaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "closeButtonBackgroundColorRatios": [],
  "overflow": "scroll",
  "width": 600,
  "bodyBorderColor": "#000000",
  "children": [
   {
    "shadow": false,
    "paddingLeft": 0,
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "url": "media/photo_B3563C3B_AC0E_4031_41D5_7AC856FCC4F1.jpg",
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "propagateClick": false,
    "horizontalAlign": "center",
    "id": "image_uidAFA7082E_A43D_027B_41CA_16CC58836361_0",
    "data": {
     "name": "Image1169"
    },
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 0
   },
   {
    "shadow": false,
    "paddingLeft": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 10,
    "minHeight": 0,
    "paddingBottom": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "id": "htmlText_uidAFA7082E_A43D_027B_41CA_16CC58836361",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The National School of Applied Sciences of El Jadida -ENSAJ- was created and established at the University Chouaib Doukkali \u2013UCD- of the city of El Jadida, the heart of an important industrial basin in full extension to meet the needs growing in engineering training in our country</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Benefiting from such an environment, the ENSAJ's mission is to work to provide a progressive training offer in permanent adequacy with the trades and professions generated by national and international economic changes, to inject dynamism for scientific research.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">To accomplish this mission, the ENSAJ builds its action on three essential levers:</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">the undeniable dynamism of its educational and administrative teams</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">local skills, available resources and partnership actions developed with socio-economic operators</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">the commitment and the spirit of belonging of the engineering students</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Based on these levers, the ENSAJ commits to its governance policy by aiming to ensure the sustainable development of the school, to establish and consolidate its anchoring in the socio-economic and cultural fabric, to further promote training and scientific research in rank of excellence and to open up more to the international stage through support projects with a vocation for training and research.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">At the end of their course, the engineering students of the ENSAJ then find themselves endowed with quality scientific skills, a civic spirit, a broad general culture and a good knowledge of the company.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Visiting this website will allow you to discover the general environment of the establishment as well as all of its activities.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Welcome !</SPAN></DIV></div>",
    "data": {
     "name": "HTMLText1170"
    },
    "scrollBarColor": "#000000",
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 10
   }
  ],
  "headerPaddingTop": 10,
  "height": 800,
  "bodyBackgroundOpacity": 1,
  "minHeight": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 12,
  "titlePaddingRight": 5,
  "titlePaddingTop": 5,
  "paddingBottom": 0,
  "shadowOpacity": 0.5,
  "scrollBarWidth": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "class": "Window",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyPaddingLeft": 5,
  "headerPaddingLeft": 10,
  "propagateClick": false,
  "veilColorRatios": [
   0,
   1
  ],
  "headerBorderSize": 0,
  "horizontalAlign": "center",
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingRight": 10,
  "headerPaddingBottom": 10,
  "contentOpaque": false,
  "closeButtonBackgroundColor": [],
  "id": "window_B3E4431C_AC13_C1F7_41B8_C4A543AE3B80",
  "titleFontStyle": "normal",
  "bodyBorderSize": 0,
  "data": {
   "name": "Window57508"
  },
  "footerBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "headerBorderColor": "#000000",
  "backgroundOpacity": 1,
  "scrollBarVisible": "rollOver",
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ]
 },
 {
  "closeButtonRollOverIconColor": "#FFFFFF",
  "footerHeight": 5,
  "shadow": true,
  "paddingLeft": 0,
  "backgroundColor": [],
  "paddingRight": 0,
  "veilOpacity": 0.4,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontSize": 14,
  "veilColorDirection": "horizontal",
  "titleTextDecoration": "none",
  "shadowVerticalLength": 0,
  "modal": true,
  "backgroundColorRatios": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "title": "Administration-English",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "closeButtonIconColor": "#000000",
  "shadowHorizontalLength": 3,
  "headerVerticalAlign": "middle",
  "bodyPaddingTop": 5,
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarOpacity": 0.5,
  "titlePaddingBottom": 5,
  "scrollBarColor": "#000000",
  "shadowColor": "#000000",
  "closeButtonIconWidth": 12,
  "titleFontColor": "#000000",
  "minWidth": 20,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadowSpread": 1,
  "borderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingBottom": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "titleFontWeight": "normal",
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "paddingTop": 0,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "titlePaddingLeft": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "closeButtonBackgroundColorRatios": [],
  "overflow": "scroll",
  "width": 400,
  "bodyBorderColor": "#000000",
  "children": [
   {
    "shadow": false,
    "paddingLeft": 0,
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "url": "media/photo_B63E45C0_AC12_404F_41C5_EF9FFDF7CE84.jpg",
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "propagateClick": false,
    "horizontalAlign": "center",
    "id": "image_uidAFA6083A_A43D_025B_41C1_0DFA45A3945C_0",
    "data": {
     "name": "Image1171"
    },
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 0
   },
   {
    "shadow": false,
    "paddingLeft": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 10,
    "minHeight": 0,
    "paddingBottom": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "id": "htmlText_uidAFA6083A_A43D_025B_41C1_0DFA45A3945C",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:17px;\"><B>Administration</B></SPAN></SPAN></DIV></div>",
    "data": {
     "name": "HTMLText1172"
    },
    "scrollBarColor": "#000000",
    "minWidth": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingTop": 10
   }
  ],
  "headerPaddingTop": 10,
  "height": 600,
  "bodyBackgroundOpacity": 1,
  "minHeight": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 12,
  "titlePaddingRight": 5,
  "titlePaddingTop": 5,
  "paddingBottom": 0,
  "shadowOpacity": 0.5,
  "scrollBarWidth": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "class": "Window",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyPaddingLeft": 5,
  "headerPaddingLeft": 10,
  "propagateClick": false,
  "veilColorRatios": [
   0,
   1
  ],
  "headerBorderSize": 0,
  "horizontalAlign": "center",
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingRight": 10,
  "headerPaddingBottom": 10,
  "contentOpaque": false,
  "closeButtonBackgroundColor": [],
  "id": "window_B11F72AB_AC12_40D1_41D0_C49D78CC6726",
  "titleFontStyle": "normal",
  "bodyBorderSize": 0,
  "data": {
   "name": "Window47065"
  },
  "footerBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "headerBorderColor": "#000000",
  "backgroundOpacity": 1,
  "scrollBarVisible": "rollOver",
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ]
 },
 {
  "id": "camera_AF95E863_A43D_02E9_41D9_72D5F5E80E48",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -119.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_AF8E1879_A43D_02D9_41E1_018B3A603006",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 179.29,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_AF877889_A43D_0239_41C7_E504A42753C9",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -89.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_AFFC6898_A43D_0227_41BF_6B735C3B9472",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -87.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_AFEB58A8_A43D_0267_41CA_A79936F4BC8C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -87.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_AFE018B8_A43D_0267_41E3_2BB37F6482AF",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 152.17,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_AFDD88C8_A43D_0227_41A9_AF23A8F0622D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 149.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_AFCA98D8_A43D_0227_41D5_B4704850BE29",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 149.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_AFC6E8E7_A43D_03E9_41DB_1BB4E87D6A4D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -120.99,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_A8322904_A43D_022F_41C9_D4491C41C68C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -179.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_A82CC92E_A43D_027B_41DA_44184EC60B6F",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -179.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_A8194951_A43D_0229_41DB_43BA91A1957E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -115.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.audio_B9032BA1_AC12_40D1_41DA_745FA4ECA2C8",
 "this.audio_B87C9DF8_AC16_C03F_41D0_C8B539321DD2",
 "this.audio_B8FE3602_AC0E_43D3_41D1_F116C2E04BD4",
 {
  "thumbnailUrl": "media/photo_B63E45C0_AC12_404F_41C5_EF9FFDF7CE84_t.jpg",
  "label": "IMG-20200319-WA0132",
  "width": 1280,
  "id": "photo_B63E45C0_AC12_404F_41C5_EF9FFDF7CE84",
  "class": "Photo",
  "height": 720,
  "image": {
   "levels": [
    {
     "url": "media/photo_B63E45C0_AC12_404F_41C5_EF9FFDF7CE84.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_B3563C3B_AC0E_4031_41D5_7AC856FCC4F1_t.jpg",
  "label": "portrait-azim-1",
  "width": 200,
  "id": "photo_B3563C3B_AC0E_4031_41D5_7AC856FCC4F1",
  "class": "Photo",
  "height": 273,
  "image": {
   "levels": [
    {
     "url": "media/photo_B3563C3B_AC0E_4031_41D5_7AC856FCC4F1.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 }
], "children": [
 {
  "shadow": false,
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "paddingRight": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarBorderRadius": 4,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBottom": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeight": 20,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderRadius": 4,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "progressHeight": 20,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 10,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "minWidth": 100,
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "playbackBarBorderSize": 2,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "width": "100%",
  "minHeight": 50,
  "height": "100%",
  "toolTipBorderSize": 1,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 30,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "top": 0,
  "propagateClick": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarBottom": 10,
  "progressOpacity": 1,
  "progressRight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "toolTipFontFamily": "Arial",
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0
 },
 {
  "children": [
   {
    "children": [
     {
      "children": [
       "this.IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919",
       "this.IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE",
       "this.IconButton_B887D10F_ACF6_41D1_41A3_88E4EBD8B8B7",
       "this.IconButton_B887B10F_ACF6_41D1_41C0_3ABADFCB9292",
       {
        "children": [
         "this.IconButton_B887710F_ACF6_41D1_41C3_D4A7E360C1AF",
         "this.IconButton_B887610F_ACF6_41D1_41DD_18CA17947F60",
         "this.IconButton_B887510F_ACF6_41D1_41D5_F54C31543830"
        ],
        "gap": 4,
        "shadow": false,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "width": 40,
        "paddingRight": 0,
        "height": "100%",
        "overflow": "hidden",
        "minHeight": 20,
        "paddingBottom": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "class": "Container",
        "layout": "vertical",
        "scrollBarMargin": 2,
        "propagateClick": false,
        "scrollBarOpacity": 0.5,
        "horizontalAlign": "center",
        "id": "Container_B887910F_ACF6_41D1_41E1_3B2DB606BC3F",
        "data": {
         "name": "Container8708"
        },
        "scrollBarColor": "#000000",
        "minWidth": 20,
        "borderSize": 0,
        "contentOpaque": false,
        "borderRadius": 0,
        "creationPolicy": "delayed",
        "backgroundOpacity": 0,
        "paddingTop": 0
       },
       "this.IconButton_B887310F_ACF6_41D1_41D1_EC5132DA4A62",
       "this.IconButton_B887110F_ACF6_41D1_41D8_1F72B26C6770",
       {
        "pressedIconURL": "skin/IconButton_B880F10F_ACF6_41D1_41E3_CA706652D494_pressed.png",
        "shadow": false,
        "iconURL": "skin/IconButton_B880F10F_ACF6_41D1_41E3_CA706652D494.png",
        "paddingLeft": 0,
        "width": 40,
        "paddingRight": 0,
        "height": 40,
        "mode": "toggle",
        "minHeight": 0,
        "paddingBottom": 0,
        "verticalAlign": "middle",
        "class": "IconButton",
        "transparencyActive": true,
        "propagateClick": false,
        "cursor": "hand",
        "horizontalAlign": "center",
        "id": "IconButton_B880F10F_ACF6_41D1_41E3_CA706652D494",
        "data": {
         "name": "Button8714"
        },
        "minWidth": 0,
        "borderSize": 0,
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "paddingTop": 0
       },
       "this.IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228"
      ],
      "gap": 4,
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "width": "59.848%",
      "paddingRight": 0,
      "overflow": "hidden",
      "minHeight": 20,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "class": "Container",
      "layout": "horizontal",
      "verticalAlign": "middle",
      "scrollBarMargin": 2,
      "propagateClick": false,
      "scrollBarOpacity": 0.5,
      "horizontalAlign": "center",
      "id": "Container_B880C10F_ACF6_41D1_41E0_47ABF8A08019",
      "data": {
       "name": "Container8703"
      },
      "scrollBarColor": "#000000",
      "minWidth": 20,
      "borderSize": 0,
      "contentOpaque": false,
      "borderRadius": 0,
      "height": "76.757%",
      "backgroundOpacity": 0,
      "creationPolicy": "delayed",
      "paddingTop": 0
     }
    ],
    "gap": 4,
    "shadow": false,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "width": 660,
    "paddingRight": 0,
    "height": "100%",
    "overflow": "hidden",
    "minHeight": 20,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "class": "Container",
    "layout": "horizontal",
    "verticalAlign": "middle",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "center",
    "id": "Container_52846DFF_5EE9_1541_41C9_642ADAAC6926",
    "data": {
     "name": "Container6716"
    },
    "scrollBarColor": "#000000",
    "minWidth": 392,
    "borderSize": 0,
    "contentOpaque": false,
    "borderRadius": 0,
    "creationPolicy": "delayed",
    "backgroundOpacity": 0,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "shadow": false,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "width": "70.38%",
  "paddingRight": 0,
  "height": 169,
  "overflow": "scroll",
  "minHeight": 1,
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "class": "Container",
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "0%",
  "data": {
   "name": "Container16156"
  },
  "horizontalAlign": "center",
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "borderSize": 0,
  "contentOpaque": false,
  "left": "14.67%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "creationPolicy": "delayed",
  "paddingTop": 0
 },
 {
  "maxHeight": 42,
  "shadow": false,
  "iconURL": "skin/IconButton_BD91ED5A_AC3D_C073_41E0_B25754B6B096.png",
  "paddingLeft": 0,
  "width": 92,
  "paddingRight": 0,
  "height": 42,
  "mode": "push",
  "minHeight": 1,
  "paddingBottom": 0,
  "class": "IconButton",
  "transparencyActive": false,
  "verticalAlign": "middle",
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "5.76%",
  "id": "IconButton_BD91ED5A_AC3D_C073_41E0_B25754B6B096",
  "data": {
   "name": "IconButton13323"
  },
  "maxWidth": 42,
  "minWidth": 1,
  "borderSize": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "right": "2.26%",
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "shadow": false,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "overflow": "scroll",
  "width": "18.297%",
  "minHeight": 1,
  "children": [
   "this.MapViewer",
   {
    "backgroundColorDirection": "vertical",
    "gap": 0,
    "height": "3.618%",
    "popUpBorderRadius": 0,
    "shadow": false,
    "paddingLeft": 5,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "paddingRight": 5,
    "playList": "this.DropDown_BA5205B3_AC3F_C031_41B3_43AD6399C6BA_playlist",
    "fontSize": 14,
    "popUpShadowColor": "#000000",
    "arrowBeforeLabel": false,
    "minHeight": 20,
    "popUpShadowOpacity": 0,
    "fontFamily": "Arial",
    "textDecoration": "none",
    "fontStyle": "normal",
    "backgroundColorRatios": [
     0
    ],
    "paddingBottom": 0,
    "class": "DropDown",
    "popUpBackgroundOpacity": 0.72,
    "top": "0%",
    "fontWeight": "normal",
    "arrowColor": "#8A8A8A",
    "fontColor": "#333333",
    "propagateClick": false,
    "popUpShadowSpread": 1,
    "popUpShadowBlurRadius": 6,
    "id": "DropDown_BA5205B3_AC3F_C031_41B3_43AD6399C6BA",
    "data": {
     "name": "DropDown1204"
    },
    "popUpFontColor": "#000000",
    "minWidth": 200,
    "borderSize": 0,
    "popUpBackgroundColor": "#FFFFFF",
    "popUpShadow": false,
    "left": "0%",
    "rollOverPopUpBackgroundColor": "#CCCCCC",
    "selectedPopUpBackgroundColor": "#33CCFF",
    "borderRadius": 0,
    "right": "0%",
    "backgroundOpacity": 0.72,
    "paddingTop": 0
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "layout": "absolute",
  "top": "0.33%",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "id": "Container_B411424C_AC32_4057_41E5_5482459E7149",
  "scrollBarMargin": 2,
  "data": {
   "name": "Container31701"
  },
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "borderSize": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "height": "42.928%",
  "right": "0%",
  "creationPolicy": "delayed",
  "backgroundOpacity": 0.3,
  "paddingTop": 0
 },
 {
  "maxHeight": 400,
  "shadow": false,
  "iconURL": "skin/IconButton_F2B672B9_E0DC_CF56_41E8_CCB5E1DDBAC9.png",
  "paddingLeft": 0,
  "width": 44,
  "paddingRight": 0,
  "height": 103.3,
  "mode": "push",
  "minHeight": 1,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "class": "IconButton",
  "transparencyActive": false,
  "click": "this.mainPlayList.set('selectedIndex', 3)",
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "1.99%",
  "id": "IconButton_F2B672B9_E0DC_CF56_41E8_CCB5E1DDBAC9",
  "data": {
   "name": "IconButton6780"
  },
  "maxWidth": 400,
  "minWidth": 1,
  "borderSize": 0,
  "left": "5.77%",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "maxHeight": 400,
  "shadow": false,
  "iconURL": "skin/IconButton_F05A43BD_E0D7_4D4E_41E9_182E9242EB35.png",
  "paddingLeft": 0,
  "width": 44.8,
  "paddingRight": 0,
  "height": 97.6,
  "mode": "push",
  "minHeight": 1,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "class": "IconButton",
  "transparencyActive": false,
  "click": "this.mainPlayList.set('selectedIndex', 8)",
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "2.27%",
  "id": "IconButton_F05A43BD_E0D7_4D4E_41E9_182E9242EB35",
  "data": {
   "name": "IconButton7660"
  },
  "maxWidth": 400,
  "minWidth": 1,
  "borderSize": 0,
  "left": "10.09%",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "maxHeight": 400,
  "shadow": false,
  "iconURL": "skin/IconButton_F2178D14_E02C_D55D_41DA_CD5D73596E7C.png",
  "paddingLeft": 0,
  "width": 46.4,
  "paddingRight": 0,
  "height": 125.8,
  "mode": "push",
  "minHeight": 1,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "class": "IconButton",
  "transparencyActive": false,
  "click": "this.mainPlayList.set('selectedIndex', 0)",
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "0.28%",
  "id": "IconButton_F2178D14_E02C_D55D_41DA_CD5D73596E7C",
  "data": {
   "name": "IconButton8734"
  },
  "maxWidth": 400,
  "minWidth": 1,
  "borderSize": 0,
  "left": "1.71%",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 }
], 
 "start": "this.syncPlaylists([this.DropDown_BA5205B3_AC3F_C031_41B3_43AD6399C6BA_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.DropDown_BA5205B3_AC3F_C031_41B3_43AD6399C6BA_playlist.set('selectedIndex', 0)",
 "gap": 10,
 "creationPolicy": "delayed",
 "buttonToggleMute": "this.IconButton_B880F10F_ACF6_41D1_41E3_CA706652D494",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "minHeight": 20,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "class": "Player",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "data": {
  "name": "Player14994"
 },
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "height": "100%",
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getKey": function(key){  return window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "existsKey": function(key){  return key in window; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); }
 },
 "paddingTop": 0
})