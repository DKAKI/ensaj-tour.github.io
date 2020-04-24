TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "mapLocations": [
   {
    "x": 266.5,
    "map": {
     "fieldOfViewOverlayOutsideOpacity": 0,
     "width": 383,
     "id": "map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903",
     "height": 425,
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
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_B5E787F9_AC16_4031_41E1_9B9AC644628C",
       "map": {
        "offsetY": 0,
        "x": 212,
        "width": 26,
        "y": 370,
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
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
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
        "x": 212,
        "y": 370,
        "class": "HotspotMapOverlayImage",
        "width": 26,
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
       "class": "AreaHotspotMapOverlay"
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_BA19EF91_AC16_40F1_41C2_CED1CD8E7A98",
       "map": {
        "offsetY": 0,
        "x": 318,
        "width": 24,
        "y": 217,
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
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
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
        "x": 318,
        "y": 217,
        "class": "HotspotMapOverlayImage",
        "width": 24,
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
       "class": "AreaHotspotMapOverlay"
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_B50FECF7_AC16_C031_41A4_DD380E86D4A1",
       "map": {
        "offsetY": 0,
        "x": 257,
        "width": 19,
        "y": 174,
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
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
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
        "x": 257,
        "y": 174,
        "class": "HotspotMapOverlayImage",
        "width": 19,
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
       "class": "AreaHotspotMapOverlay"
      }
     ],
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "maximumZoomFactor": 1.2,
     "class": "Map",
     "initialZoomFactor": 1,
     "label": "floor-arabic",
     "scaleMode": "fit_inside",
     "thumbnailUrl": "media/map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903_t.png",
     "fieldOfViewOverlayRadiusScale": 0.3
    },
    "angle": 176.99,
    "y": 184,
    "class": "PanoramaMapLocation"
   }
  ],
  "id": "panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1",
  "pitch": 0,
  "partial": false,
  "hfov": 360,
  "hfovMax": 120,
  "label": "1 (1)",
  "audios": [
   {
    "data": {
     "label": "arabic1"
    },
    "id": "audio_B8FE3602_AC0E_43D3_41D1_F116C2E04BD4",
    "autoplay": true,
    "class": "PanoramaAudio",
    "audio": {
     "oggUrl": "media/audio_B8FE3602_AC0E_43D3_41D1_F116C2E04BD4.ogg",
     "mp3Url": "media/audio_B8FE3602_AC0E_43D3_41D1_F116C2E04BD4.mp3",
     "class": "AudioResource"
    }
   }
  ],
  "vfov": 180,
  "class": "Panorama",
  "frames": [
   {
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
    },
    "thumbnailUrl": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_A0B0AB49_AC16_4051_41A4_670687A8D180",
      "items": [
       {
        "yaw": -30.9,
        "hfov": 8.54,
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
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31, this.camera_A14854D3_ADF1_A84C_41C1_22751FF8AFBD); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.54,
        "yaw": -30.9,
        "image": {
         "levels": [
          {
           "height": 42,
           "width": 59,
           "url": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.89
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_A20DDECD_AC72_4051_41DF_9EB8A6253308",
      "items": [
       {
        "yaw": 90.19,
        "hfov": 21,
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
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202, this.camera_A159A4C3_ADF1_A84C_41DB_5B70AE8E5387); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 21,
        "yaw": 90.19,
        "image": {
         "levels": [
          {
           "height": 73,
           "width": 156,
           "url": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.86
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_B6C1258C_AC15_C0D7_41D0_F2094E518C1C",
      "items": [
       {
        "yaw": -172.84,
        "hfov": 6.82,
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
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.82,
        "yaw": -172.84,
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 48,
           "url": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 11.45
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_B1791720_AC1E_41CF_41E0_0F66C35B1C14",
      "items": [
       {
        "yaw": -121.73,
        "hfov": 13.71,
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
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showWindow(this.window_B1438CBA_AC1D_C033_41C1_93B3BA246B41, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.71,
        "yaw": -121.73,
        "image": {
         "levels": [
          {
           "height": 118,
           "width": 104,
           "url": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 24.61
       }
      ],
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_t.jpg",
  "adjacentPanoramas": [
   {
    "panorama": {
     "thumbnailUrl": "media/panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202_t.jpg",
     "mapLocations": [
      {
       "x": 225,
       "map": "this.map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903",
       "angle": 49.74,
       "y": 381.5,
       "class": "PanoramaMapLocation"
      }
     ],
     "id": "panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202",
     "pitch": 0,
     "partial": false,
     "hfov": 360,
     "hfovMax": 120,
     "label": "1 (3)",
     "vfov": 180,
     "class": "Panorama",
     "frames": [
      {
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
       },
       "thumbnailUrl": "media/panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_B0D3BC6B_AC72_4051_41E4_5CB297B2B4FA",
         "items": [
          {
           "yaw": 59.01,
           "hfov": 9.15,
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
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1, this.camera_A1982417_ADF1_AFF4_41D8_7DD47226D5DA); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.15,
           "yaw": 59.01,
           "image": {
            "levels": [
             {
              "height": 73,
              "width": 63,
              "url": "media/panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 5.73
          }
         ],
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1",
       "backwardYaw": 90.19,
       "yaw": 59.01,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ]
    },
    "backwardYaw": 59.01,
    "yaw": 90.19,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": {
     "thumbnailUrl": "media/panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_t.jpg",
     "mapLocations": [
      {
       "x": 330,
       "map": "this.map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903",
       "angle": -87.74,
       "y": 229,
       "class": "PanoramaMapLocation"
      }
     ],
     "id": "panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31",
     "pitch": 0,
     "partial": false,
     "hfov": 360,
     "hfovMax": 120,
     "label": "1 (2)",
     "vfov": 180,
     "class": "Panorama",
     "frames": [
      {
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
       },
       "thumbnailUrl": "media/panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_A3954B43_AC16_C051_41CC_836D19DCBF8B",
         "items": [
          {
           "yaw": 0.92,
           "hfov": 19.13,
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
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1, this.camera_A17E5475_ADF1_A834_41E4_16DCC20F111B); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.13,
           "yaw": 0.92,
           "image": {
            "levels": [
             {
              "height": 143,
              "width": 143,
              "url": "media/panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -22.23
          }
         ],
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_B3AF2BD1_AC0E_C071_41E5_7BDB207F973A",
         "items": [
          {
           "yaw": -92.94,
           "hfov": 7.16,
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
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.showWindow(this.window_B3F114FA_AC0F_C033_41C6_E56443A7BD65, null, false)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.16,
           "yaw": -92.94,
           "image": {
            "levels": [
             {
              "height": 71,
              "width": 84,
              "url": "media/panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 53.8
          }
         ],
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1",
       "backwardYaw": -30.9,
       "yaw": 0.92,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ]
    },
    "backwardYaw": 0.92,
    "yaw": -30.9,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ]
 },
 {
  "preloadEnabled": false,
  "buttonZoomOut": {
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "rollOverIconURL": "skin/IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919_rollover.png",
   "iconURL": "skin/IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919.png",
   "borderSize": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "minHeight": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "id": "IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919",
   "transparencyActive": true,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919_pressed.png",
   "data": {
    "name": "Button8704"
   },
   "minWidth": 0,
   "shadow": false
  },
  "buttonPlayRight": {
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "rollOverIconURL": "skin/IconButton_B887110F_ACF6_41D1_41D8_1F72B26C6770_rollover.png",
   "iconURL": "skin/IconButton_B887110F_ACF6_41D1_41D8_1F72B26C6770.png",
   "borderSize": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "minHeight": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "id": "IconButton_B887110F_ACF6_41D1_41D8_1F72B26C6770",
   "transparencyActive": true,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_B887110F_ACF6_41D1_41D8_1F72B26C6770_pressed.png",
   "data": {
    "name": "Button8713"
   },
   "minWidth": 0,
   "shadow": false
  },
  "buttonMoveUp": {
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "rollOverIconURL": "skin/IconButton_B887710F_ACF6_41D1_41C3_D4A7E360C1AF_rollover.png",
   "iconURL": "skin/IconButton_B887710F_ACF6_41D1_41C3_D4A7E360C1AF.png",
   "borderSize": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "minHeight": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "id": "IconButton_B887710F_ACF6_41D1_41C3_D4A7E360C1AF",
   "transparencyActive": true,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_B887710F_ACF6_41D1_41C3_D4A7E360C1AF_pressed.png",
   "data": {
    "name": "Button8709"
   },
   "minWidth": 0,
   "shadow": false
  },
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "buttonPause": {
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "backgroundOpacity": 0,
   "mode": "toggle",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "iconURL": "skin/IconButton_B887610F_ACF6_41D1_41DD_18CA17947F60.png",
   "borderSize": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "minHeight": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "id": "IconButton_B887610F_ACF6_41D1_41DD_18CA17947F60",
   "transparencyActive": true,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_B887610F_ACF6_41D1_41DD_18CA17947F60_pressed.png",
   "data": {
    "name": "Button8710"
   },
   "minWidth": 0,
   "shadow": false
  },
  "buttonCardboardView": "this.IconButton_BD91ED5A_AC3D_C073_41E0_B25754B6B096",
  "buttonMoveDown": {
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "rollOverIconURL": "skin/IconButton_B887510F_ACF6_41D1_41D5_F54C31543830_rollover.png",
   "iconURL": "skin/IconButton_B887510F_ACF6_41D1_41D5_F54C31543830.png",
   "borderSize": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "minHeight": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "id": "IconButton_B887510F_ACF6_41D1_41D5_F54C31543830",
   "transparencyActive": true,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_B887510F_ACF6_41D1_41D5_F54C31543830_pressed.png",
   "data": {
    "name": "Button8711"
   },
   "minWidth": 0,
   "shadow": false
  },
  "buttonMoveLeft": {
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "rollOverIconURL": "skin/IconButton_B887B10F_ACF6_41D1_41C0_3ABADFCB9292_rollover.png",
   "iconURL": "skin/IconButton_B887B10F_ACF6_41D1_41C0_3ABADFCB9292.png",
   "borderSize": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "minHeight": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "id": "IconButton_B887B10F_ACF6_41D1_41C0_3ABADFCB9292",
   "transparencyActive": true,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_B887B10F_ACF6_41D1_41C0_3ABADFCB9292_pressed.png",
   "data": {
    "name": "Button8707"
   },
   "minWidth": 0,
   "shadow": false
  },
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomIn": {
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "rollOverIconURL": "skin/IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228_rollover.png",
   "iconURL": "skin/IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228.png",
   "borderSize": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "minHeight": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "id": "IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228",
   "transparencyActive": true,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228_pressed.png",
   "data": {
    "name": "Button8715"
   },
   "minWidth": 0,
   "shadow": false
  },
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "rollOverIconURL": "skin/IconButton_B887D10F_ACF6_41D1_41A3_88E4EBD8B8B7_rollover.png",
   "iconURL": "skin/IconButton_B887D10F_ACF6_41D1_41A3_88E4EBD8B8B7.png",
   "borderSize": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "minHeight": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "id": "IconButton_B887D10F_ACF6_41D1_41A3_88E4EBD8B8B7",
   "transparencyActive": true,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_B887D10F_ACF6_41D1_41A3_88E4EBD8B8B7_pressed.png",
   "data": {
    "name": "Button8706"
   },
   "minWidth": 0,
   "shadow": false
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveRight": {
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "rollOverIconURL": "skin/IconButton_B887310F_ACF6_41D1_41D1_EC5132DA4A62_rollover.png",
   "iconURL": "skin/IconButton_B887310F_ACF6_41D1_41D1_EC5132DA4A62.png",
   "borderSize": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "minHeight": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "id": "IconButton_B887310F_ACF6_41D1_41D1_EC5132DA4A62",
   "transparencyActive": true,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_B887310F_ACF6_41D1_41D1_EC5132DA4A62_pressed.png",
   "data": {
    "name": "Button8712"
   },
   "minWidth": 0,
   "shadow": false
  },
  "buttonRestart": {
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "rollOverIconURL": "skin/IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE_rollover.png",
   "iconURL": "skin/IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE.png",
   "borderSize": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "minHeight": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "id": "IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE",
   "transparencyActive": true,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE_pressed.png",
   "data": {
    "name": "Button8705"
   },
   "minWidth": 0,
   "shadow": false
  },
  "displayPlaybackBar": true
 },
 {
  "buttonZoomIn": "this.IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228",
  "viewerArea": {
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarBottom": 0,
   "playbackBarHeight": 20,
   "playbackBarHeadOpacity": 1,
   "paddingLeft": 0,
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "progressBorderColor": "#AAAAAA",
   "shadow": false,
   "toolTipBorderColor": "#767676",
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "paddingRight": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBorderColor": "#AAAAAA",
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "paddingTop": 0,
   "transitionDuration": 500,
   "toolTipTextShadowOpacity": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "progressBarBorderRadius": 4,
   "playbackBarHeadBorderSize": 0,
   "minHeight": 1,
   "playbackBarHeadBorderRadius": 0,
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowSpread": 0,
   "playbackBarBorderRadius": 4,
   "playbackBarHeadWidth": 6,
   "toolTipShadowColor": "#333333",
   "toolTipDisplayTime": 600,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "transitionMode": "blending",
   "class": "ViewerArea",
   "progressLeft": 10,
   "playbackBarRight": 0,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressOpacity": 1,
   "playbackBarBorderSize": 2,
   "playbackBarHeadShadowHorizontalLength": 0,
   "minWidth": 1,
   "toolTipPaddingLeft": 6,
   "playbackBarBackgroundOpacity": 1,
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 12,
   "toolTipFontStyle": "normal",
   "playbackBarHeadShadowColor": "#000000",
   "toolTipBorderSize": 1,
   "progressRight": 10,
   "toolTipBackgroundColor": "#F6F6F6",
   "progressOpacity": 1,
   "width": "93.309%",
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingRight": 6,
   "borderSize": 0,
   "height": "92.121%",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarHeadShadow": true,
   "toolTipTextShadowColor": "#000000",
   "progressBackgroundOpacity": 1,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "toolTipFontFamily": "Arial",
   "toolTipPaddingTop": 4,
   "playbackBarOpacity": 1,
   "progressBarOpacity": 1,
   "progressHeight": 20,
   "progressBorderSize": 2,
   "toolTipShadowBlurRadius": 3,
   "borderRadius": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "id": "MapViewer",
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "bottom": "1.52%",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipShadowOpacity": 1,
   "progressBarBorderSize": 0,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipBorderRadius": 3,
   "progressBorderRadius": 4,
   "progressBottom": 2,
   "playbackBarLeft": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadHeight": 30,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "left": "2.6%",
   "playbackBarProgressBorderRadius": 0,
   "toolTipOpacity": 1,
   "progressBarBorderColor": "#000000",
   "paddingBottom": 0
  },
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "buttonZoomOut": "this.IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919",
  "class": "MapPlayer"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "mapLocations": [
   {
    "x": 269,
    "map": {
     "fieldOfViewOverlayOutsideOpacity": 0,
     "width": 383,
     "id": "map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF",
     "height": 425,
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
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_BA5170E2_AC12_4053_41CE_01F1D67B717E",
       "map": {
        "offsetY": 0,
        "x": 197,
        "width": 32,
        "y": 369,
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
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 197,
        "y": 369,
        "class": "HotspotMapOverlayImage",
        "width": 32,
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
       "class": "AreaHotspotMapOverlay"
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_BAF5A537_AC1D_C031_41D9_C7205A5FEF3B",
       "map": {
        "offsetY": 0,
        "x": 312,
        "width": 29,
        "y": 217,
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
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 312,
        "y": 217,
        "class": "HotspotMapOverlayImage",
        "width": 29,
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
       "class": "AreaHotspotMapOverlay"
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_BAE49099_AC1E_C0F1_41E4_073A98E39646",
       "map": {
        "offsetY": 0,
        "x": 252,
        "width": 34,
        "y": 174,
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
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 252,
        "y": 174,
        "class": "HotspotMapOverlayImage",
        "width": 34,
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
       "class": "AreaHotspotMapOverlay"
      }
     ],
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "maximumZoomFactor": 1.2,
     "class": "Map",
     "initialZoomFactor": 1,
     "label": "floor-francais",
     "scaleMode": "fit_inside",
     "thumbnailUrl": "media/map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF_t.png",
     "fieldOfViewOverlayRadiusScale": 0.3
    },
    "angle": 181.51,
    "y": 184.5,
    "class": "PanoramaMapLocation"
   }
  ],
  "id": "panorama_A20881B3_ABFD_C030_41DC_60549851B2B3",
  "pitch": 0,
  "partial": false,
  "hfov": 360,
  "hfovMax": 120,
  "label": "2018-04-29 (1)",
  "audios": [
   {
    "data": {
     "label": "french1"
    },
    "id": "audio_B87C9DF8_AC16_C03F_41D0_C8B539321DD2",
    "autoplay": true,
    "class": "PanoramaAudio",
    "audio": {
     "oggUrl": "media/audio_B87C9DF8_AC16_C03F_41D0_C8B539321DD2.ogg",
     "mp3Url": "media/audio_B87C9DF8_AC16_C03F_41D0_C8B539321DD2.mp3",
     "class": "AudioResource"
    }
   }
  ],
  "vfov": 180,
  "class": "Panorama",
  "frames": [
   {
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
    },
    "thumbnailUrl": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_A25EBBC1_AC75_C051_41C5_95A735B971D3",
      "items": [
       {
        "yaw": -30.08,
        "hfov": 8.55,
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
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A208C57F_ABFE_4031_41E4_B3274C95448F, this.camera_A1233511_ADF1_A9CC_4198_E0D8DF8B2DA6); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.55,
        "yaw": -30.08,
        "image": {
         "levels": [
          {
           "height": 31,
           "width": 59,
           "url": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.48
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_A26D8B6A_AC75_C053_41E5_6C734BFECB90",
      "items": [
       {
        "yaw": 92.64,
        "hfov": 19.07,
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
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A, this.camera_A1360502_ADF1_A9CC_41D4_06A178463112); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.07,
        "yaw": 92.64,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 144,
           "url": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.73
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_B6A2F083_AC1E_40D1_41D8_B272AB63D321",
      "items": [
       {
        "yaw": -173.05,
        "hfov": 6.39,
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
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.39,
        "yaw": -173.05,
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 45,
           "url": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.68
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_B15BC73E_AC17_C033_41D7_8A992AB5334D",
      "items": [
       {
        "yaw": -120.1,
        "hfov": 12.75,
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
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showWindow(this.window_B10D4105_AC16_41D1_41E3_E905EC3C9C30, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.75,
        "yaw": -120.1,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 99,
           "url": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 26.65
       }
      ],
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_t.jpg",
  "adjacentPanoramas": [
   {
    "panorama": {
     "thumbnailUrl": "media/panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A_t.jpg",
     "mapLocations": [
      {
       "x": 213,
       "map": "this.map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF",
       "angle": 48.72,
       "y": 381.5,
       "class": "PanoramaMapLocation"
      }
     ],
     "id": "panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A",
     "pitch": 0,
     "partial": false,
     "hfov": 360,
     "hfovMax": 120,
     "label": "2018-04-29 (3)",
     "vfov": 180,
     "class": "Panorama",
     "frames": [
      {
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
       },
       "thumbnailUrl": "media/panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_B0FFA5D1_AC72_C071_41D7_E233F051FE5C",
         "items": [
          {
           "yaw": 64.33,
           "hfov": 8.38,
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
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3, this.camera_A16CD494_ADF1_A8F4_41C3_DF91248BE33B); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.38,
           "yaw": 64.33,
           "image": {
            "levels": [
             {
              "height": 48,
              "width": 58,
              "url": "media/panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.61
          }
         ],
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3",
       "backwardYaw": 92.64,
       "yaw": 64.33,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ]
    },
    "backwardYaw": 64.33,
    "yaw": 92.64,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": {
     "thumbnailUrl": "media/panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_t.jpg",
     "mapLocations": [
      {
       "x": 326.5,
       "map": "this.map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF",
       "angle": 270,
       "y": 229.5,
       "class": "PanoramaMapLocation"
      }
     ],
     "id": "panorama_A208C57F_ABFE_4031_41E4_B3274C95448F",
     "pitch": 0,
     "partial": false,
     "hfov": 360,
     "hfovMax": 120,
     "label": "2018-04-29 (2)",
     "vfov": 180,
     "class": "Panorama",
     "frames": [
      {
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
       },
       "thumbnailUrl": "media/panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_BC670470_AC16_404F_41DE_00E3690C34F1",
         "items": [
          {
           "yaw": 0.92,
           "hfov": 18.9,
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
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3, this.camera_A1849437_ADF1_A835_41C5_308A57BBEF86); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 18.9,
           "yaw": 0.92,
           "image": {
            "levels": [
             {
              "height": 143,
              "width": 143,
              "url": "media/panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -23.87
          }
         ],
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_B3D7C406_AC16_47D3_41E0_9C11026D585D",
         "items": [
          {
           "yaw": -93.35,
           "hfov": 5.32,
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
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.showWindow(this.window_B3DD24E4_AC16_C057_41E0_8CD74C71B563, null, false)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.32,
           "yaw": -93.35,
           "image": {
            "levels": [
             {
              "height": 71,
              "width": 72,
              "url": "media/panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 59.52
          }
         ],
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3",
       "backwardYaw": -30.08,
       "yaw": 0.92,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ]
    },
    "backwardYaw": 0.92,
    "yaw": -30.08,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_A208C57F_ABFE_4031_41E4_B3274C95448F",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_t.jpg",
  "mapLocations": [
   {
    "x": 328.5,
    "map": {
     "fieldOfViewOverlayOutsideOpacity": 0,
     "width": 383,
     "id": "map_B879690F_AC32_C1D1_41CE_7300DBCC7432",
     "height": 425,
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
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_B5615CBC_AC12_4037_41CB_36D26AD709C1",
       "map": {
        "offsetY": 0,
        "x": 183,
        "width": 20,
        "y": 368,
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
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 183,
        "y": 368,
        "class": "HotspotMapOverlayImage",
        "width": 20,
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
       "class": "AreaHotspotMapOverlay"
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_B46B10A9_AC12_40D1_41B4_ACE912B51FE0",
       "map": {
        "offsetY": 0,
        "x": 315,
        "width": 27,
        "y": 221,
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
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 315,
        "y": 221,
        "class": "HotspotMapOverlayImage",
        "width": 27,
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
       "class": "AreaHotspotMapOverlay"
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_B438AB80_AC12_C0CF_41E2_9B83ED8690FE",
       "map": {
        "offsetY": 0,
        "x": 263,
        "width": 21,
        "y": 174,
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
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 263,
        "y": 174,
        "class": "HotspotMapOverlayImage",
        "width": 21,
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
       "class": "AreaHotspotMapOverlay"
      }
     ],
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "maximumZoomFactor": 1.2,
     "class": "Map",
     "initialZoomFactor": 1,
     "label": "floor-anglais",
     "scaleMode": "fit_inside",
     "thumbnailUrl": "media/map_B879690F_AC32_C1D1_41CE_7300DBCC7432_t.png",
     "fieldOfViewOverlayRadiusScale": 0.3
    },
    "angle": -85.5,
    "y": 231.5,
    "class": "PanoramaMapLocation"
   }
  ],
  "id": "panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98",
  "pitch": 0,
  "partial": false,
  "hfov": 360,
  "hfovMax": 120,
  "label": "dos",
  "vfov": 180,
  "class": "Panorama",
  "frames": [
   {
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
    },
    "thumbnailUrl": "media/panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_BC03FBC4_AC16_C057_41E2_F27E80ECD7FB",
      "items": [
       {
        "yaw": -0.71,
        "hfov": 18.78,
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
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9, this.camera_A1711456_ADF1_A874_41E2_7C77483B9F53); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.78,
        "yaw": -0.71,
        "image": {
         "levels": [
          {
           "height": 143,
           "width": 143,
           "url": "media/panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.69
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_B3E8B783_AC13_C0D1_41E4_3029619F1BE0",
      "items": [
       {
        "yaw": -94.57,
        "hfov": 5.2,
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
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showWindow(this.window_B3E4431C_AC13_C1F7_41B8_C4A543AE3B80, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.2,
        "yaw": -94.57,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 67,
           "url": "media/panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 57.48
       }
      ],
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "mapLocations": [
      {
       "x": 273.5,
       "map": "this.map_B879690F_AC32_C1D1_41CE_7300DBCC7432",
       "angle": 178.45,
       "y": 184,
       "class": "PanoramaMapLocation"
      }
     ],
     "id": "panorama_A208168A_ABFE_40D3_41D7_442C746690F9",
     "pitch": 0,
     "partial": false,
     "hfov": 360,
     "hfovMax": 120,
     "label": "uno",
     "audios": [
      {
       "data": {
        "label": "speech1-English"
       },
       "id": "audio_B9032BA1_AC12_40D1_41DA_745FA4ECA2C8",
       "autoplay": true,
       "class": "PanoramaAudio",
       "audio": {
        "oggUrl": "media/audio_B9032BA1_AC12_40D1_41DA_745FA4ECA2C8.ogg",
        "mp3Url": "media/audio_B9032BA1_AC12_40D1_41DA_745FA4ECA2C8.mp3",
        "class": "AudioResource"
       }
      }
     ],
     "vfov": 180,
     "class": "Panorama",
     "frames": [
      {
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
       },
       "thumbnailUrl": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_A16C9880_AC76_40CF_41A1_2FB702A3AFE2",
         "items": [
          {
           "yaw": -27.83,
           "hfov": 10.58,
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
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98, this.camera_A11F4540_ADF1_A84C_41D4_93418D49ADFC); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.58,
           "yaw": -27.83,
           "image": {
            "levels": [
             {
              "height": 22,
              "width": 73,
              "url": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -4.09
          }
         ],
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_A2A933D5_AC76_C071_41D3_2487C50D2D91",
         "items": [
          {
           "yaw": 92.03,
           "hfov": 19.09,
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
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2, this.camera_A1118531_ADF1_A9CD_41E0_95CA69E6D054); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.09,
           "yaw": 92.03,
           "image": {
            "levels": [
             {
              "height": 62,
              "width": 141,
              "url": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -20.86
          }
         ],
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_B1432B4D_AC1E_4051_419B_FEFB5DB5E3B8",
         "items": [
          {
           "yaw": -172.84,
           "hfov": 6.85,
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
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.85,
           "yaw": -172.84,
           "image": {
            "levels": [
             {
              "height": 45,
              "width": 48,
              "url": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 9.82
          }
         ],
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_B12F1EDF_AC12_C071_41DB_1DCA51D2E359",
         "items": [
          {
           "yaw": -125.21,
           "hfov": 10.24,
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
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.showWindow(this.window_B11F72AB_AC12_40D1_41D0_C49D78CC6726, null, false)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.24,
           "yaw": -125.21,
           "image": {
            "levels": [
             {
              "height": 81,
              "width": 79,
              "url": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 26.04
          }
         ],
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_A208168A_ABFE_40D3_41D7_442C746690F9_t.jpg",
     "adjacentPanoramas": [
      {
       "panorama": {
        "thumbnailUrl": "media/panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2_t.jpg",
        "mapLocations": [
         {
          "x": 193,
          "map": "this.map_B879690F_AC32_C1D1_41CE_7300DBCC7432",
          "angle": 48.04,
          "y": 379.5,
          "class": "PanoramaMapLocation"
         }
        ],
        "id": "panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2",
        "pitch": 0,
        "partial": false,
        "hfov": 360,
        "hfovMax": 120,
        "label": "tres",
        "vfov": 180,
        "class": "Panorama",
        "frames": [
         {
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
          },
          "thumbnailUrl": "media/panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_B15AD511_AC75_C1F1_41E3_B4AB279EA061",
            "items": [
             {
              "yaw": 60.75,
              "hfov": 10.2,
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
            ],
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9, this.camera_A1AD63F8_ADF1_A83C_416B_6726A6B153EC); this.mainPlayList.set('selectedIndex', 8)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.2,
              "yaw": 60.75,
              "image": {
               "levels": [
                {
                 "height": 76,
                 "width": 71,
                 "url": "media/panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 4.3
             }
            ],
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ],
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9",
          "backwardYaw": 92.03,
          "yaw": 60.75,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ]
       },
       "backwardYaw": 60.75,
       "yaw": 92.03,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98",
       "backwardYaw": -0.71,
       "yaw": -27.83,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ]
    },
    "backwardYaw": -27.83,
    "yaw": -0.71,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_A208168A_ABFE_40D3_41D7_442C746690F9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "label": "Salle-TP",
  "playList": {
   "items": [
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.61",
       "zoomFactor": 1.1,
       "y": "0.57",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0037",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_0",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_0_t.jpg",
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.47",
       "zoomFactor": 1.1,
       "y": "0.62",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0038",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_1",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_1_t.jpg",
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
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.45",
       "zoomFactor": 1.1,
       "y": "0.75",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0039",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_2",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_2_t.jpg",
      "image": {
       "levels": [
        {
         "url": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.29",
       "zoomFactor": 1.1,
       "y": "0.36",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0040",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_3",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_3_t.jpg",
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
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.36",
       "zoomFactor": 1.1,
       "y": "0.61",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0041",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_4",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_4_t.jpg",
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
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.55",
       "zoomFactor": 1.1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0042",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_5",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_5_t.jpg",
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
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.56",
       "zoomFactor": 1.1,
       "y": "0.27",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0043",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_6",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_6_t.jpg",
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
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.28",
       "zoomFactor": 1.1,
       "y": "0.51",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0063",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_7",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_7_t.jpg",
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
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.72",
       "zoomFactor": 1.1,
       "y": "0.74",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0068",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_8",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_8_t.jpg",
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
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.30",
       "zoomFactor": 1.1,
       "y": "0.41",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0074",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_9",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_9_t.jpg",
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
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.52",
       "zoomFactor": 1.1,
       "y": "0.56",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0075",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_10",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_10_t.jpg",
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
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.54",
       "zoomFactor": 1.1,
       "y": "0.39",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0076",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_11",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_11_t.jpg",
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
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.56",
       "zoomFactor": 1.1,
       "y": "0.35",
       "class": "PhotoCameraPosition"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "class": "MovementPhotoCamera"
     },
     "media": {
      "label": "IMG-20200319-WA0079",
      "class": "Photo",
      "width": 1280,
      "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_12",
      "height": 720,
      "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_12_t.jpg",
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
     "class": "PhotoPlayListItem"
    }
   ],
   "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_AlbumPlayList",
   "class": "PhotoPlayList"
  },
  "id": "album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC",
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_t.png"
 },
 {
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.IconButton_B887610F_ACF6_41D1_41DD_18CA17947F60",
  "id": "MainViewerPhotoAlbumPlayer",
  "buttonRestart": "this.IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE",
  "class": "PhotoAlbumPlayer"
 },
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_0",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_1",
 "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC_2",
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
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1CFE3AA_ADF1_A8DC_41CE_A48BC8985C5E, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_A0EA31C1_ABFD_C051_41D0_A08BFD572DA1_camera",
    "id": "PanoramaPlayListItem_A1CFE3AA_ADF1_A8DC_41CE_A48BC8985C5E",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1B263AA_ADF1_A8DC_41D9_F4E2E017EC77, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_A208E32A_ABFD_C1D3_41DE_2AB588EA9A31_camera",
    "id": "PanoramaPlayListItem_A1B263AA_ADF1_A8DC_41D9_F4E2E017EC77",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1B233AA_ADF1_A8DC_41D7_2568DAA7D1A6, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_A2089B8D_ABFD_C0D1_41E5_0BA818ECF202_camera",
    "id": "PanoramaPlayListItem_A1B233AA_ADF1_A8DC_41D7_2568DAA7D1A6",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1B283AA_ADF1_A8DC_41DE_BC7BE9CE8470, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_A20881B3_ABFD_C030_41DC_60549851B2B3_camera",
    "id": "PanoramaPlayListItem_A1B283AA_ADF1_A8DC_41DE_BC7BE9CE8470",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A208C57F_ABFE_4031_41E4_B3274C95448F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1B353AA_ADF1_A8DC_41E1_008B4BA09424, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_A208C57F_ABFE_4031_41E4_B3274C95448F_camera",
    "id": "PanoramaPlayListItem_A1B353AA_ADF1_A8DC_41E1_008B4BA09424",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1B3E3AA_ADF1_A8DC_41B7_FE3F64BA6ED7, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_A208FDDB_ABFE_4071_41E3_2F717BB6441A_camera",
    "id": "PanoramaPlayListItem_A1B3E3AA_ADF1_A8DC_41B7_FE3F64BA6ED7",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1B3B3AA_ADF1_A8DC_41DF_9D94938F14E4, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_A208D640_ABFE_404F_417A_DF39E1AB5E98_camera",
    "id": "PanoramaPlayListItem_A1B3B3AA_ADF1_A8DC_41DF_9D94938F14E4",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1B453AA_ADF1_A8DC_41DD_2AB2DCCDAAF9, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_A208FEA2_ABFE_40D3_41B3_CC0055E16FD2_camera",
    "id": "PanoramaPlayListItem_A1B453AA_ADF1_A8DC_41DD_2AB2DCCDAAF9",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1B413AA_ADF1_A8DC_41B7_FFA3ACA4B367, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_A208168A_ABFE_40D3_41D7_442C746690F9_camera",
    "id": "PanoramaPlayListItem_A1B413AA_ADF1_A8DC_41B7_FFA3ACA4B367",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.album_B787A2CF_AC12_C051_41B0_4FB2B5FEEFDC",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "end": "this.trigger('tourEnded')",
    "class": "PhotoAlbumPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903",
 "this.map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF",
 "this.map_B879690F_AC32_C1D1_41CE_7300DBCC7432",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B8F0C3FD_AC32_C031_41D9_BA939A3B4903",
    "class": "MapPlayListItem"
   },
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B876B682_AC32_C0D3_41B0_BB7FE6CE7CCF",
    "class": "MapPlayListItem"
   },
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B879690F_AC32_C1D1_41CE_7300DBCC7432",
    "class": "MapPlayListItem"
   }
  ],
  "id": "DropDown_BA5205B3_AC3F_C031_41B3_43AD6399C6BA_playlist",
  "class": "PlayList"
 },
 {
  "verticalAlign": "middle",
  "closeButtonBackgroundColor": [],
  "titleFontWeight": "normal",
  "closeButtonPaddingBottom": 0,
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "shadow": true,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "paddingLeft": 0,
  "bodyBackgroundOpacity": 1,
  "gap": 10,
  "footerBorderColor": "#000000",
  "shadowOpacity": 0.5,
  "paddingRight": 0,
  "modal": true,
  "titlePaddingLeft": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "creationPolicy": "delayed",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundOpacity": 1,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "closeButtonBorderRadius": 11,
  "title": "\u0627\u0644\u0627\u062f\u0631\u0627\u0629",
  "footerBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "bodyPaddingTop": 5,
  "headerPaddingRight": 10,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "backgroundColorRatios": [],
  "layout": "vertical",
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "headerPaddingBottom": 10,
  "closeButtonPaddingLeft": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyPaddingRight": 5,
  "titlePaddingBottom": 5,
  "shadowVerticalLength": 0,
  "closeButtonIconLineWidth": 2,
  "class": "Window",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "children": [
   {
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "height": "50%",
    "width": "100%",
    "url": "media/photo_B63E45C0_AC12_404F_41C5_EF9FFDF7CE84.jpg",
    "borderSize": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "paddingTop": 0,
    "minHeight": 0,
    "borderRadius": 0,
    "id": "image_uidA1C3F35C_ADF1_A874_41B2_1314DE75A2A4_0",
    "data": {
     "name": "Image1215"
    },
    "class": "Image",
    "minWidth": 0,
    "shadow": false
   },
   {
    "paddingBottom": 10,
    "paddingLeft": 10,
    "backgroundOpacity": 0,
    "paddingRight": 10,
    "height": "50%",
    "width": "100%",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "paddingTop": 10,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "borderRadius": 0,
    "id": "htmlText_uidA1C3F35C_ADF1_A874_41B2_1314DE75A2A4",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0627\u0644\u0627\u062f\u0631\u0627\u0629 -\u0645\u0643\u062a\u0628 \u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644</SPAN></DIV></div>",
    "scrollBarOpacity": 0.5,
    "data": {
     "name": "HTMLText1216"
    },
    "class": "HTMLText",
    "minWidth": 0,
    "shadow": false
   }
  ],
  "headerVerticalAlign": "middle",
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "shadowBlurRadius": 6,
  "footerBackgroundOpacity": 1,
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "height": 600,
  "closeButtonIconColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBackgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "bodyBorderSize": 0,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "bodyPaddingLeft": 5,
  "titleFontStyle": "normal",
  "closeButtonIconHeight": 12,
  "titleFontSize": 14,
  "titleFontColor": "#000000",
  "bodyBorderColor": "#000000",
  "scrollBarVisible": "rollOver",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "bodyBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "id": "window_B1438CBA_AC1D_C033_41C1_93B3BA246B41",
  "headerBorderSize": 0,
  "bodyPaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "data": {
   "name": "Window44383"
  },
  "scrollBarOpacity": 0.5,
  "closeButtonPaddingRight": 0,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPaddingTop": 0,
  "closeButtonIconWidth": 12,
  "overflow": "scroll",
  "headerBackgroundOpacity": 1,
  "footerBorderSize": 0,
  "titleTextDecoration": "none",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0
 },
 {
  "verticalAlign": "middle",
  "closeButtonBackgroundColor": [],
  "titleFontWeight": "normal",
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "shadow": true,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "paddingLeft": 0,
  "bodyBackgroundOpacity": 1,
  "gap": 10,
  "shadowOpacity": 0.5,
  "paddingRight": 0,
  "modal": true,
  "titlePaddingLeft": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "creationPolicy": "delayed",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "closeButtonBorderRadius": 11,
  "title": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u062f\u064a\u0631",
  "footerBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "bodyPaddingTop": 5,
  "headerPaddingRight": 10,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "backgroundColorRatios": [],
  "layout": "vertical",
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "headerPaddingBottom": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyPaddingRight": 5,
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "class": "Window",
  "headerBackgroundColorDirection": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "height": "50%",
    "width": "100%",
    "url": "media/photo_B3563C3B_AC0E_4031_41D5_7AC856FCC4F1.jpg",
    "borderSize": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "paddingTop": 0,
    "minHeight": 0,
    "borderRadius": 0,
    "id": "image_uidA1C5836C_ADF1_A85B_41DB_4E2161723535_0",
    "data": {
     "name": "Image1217"
    },
    "class": "Image",
    "minWidth": 0,
    "shadow": false
   },
   {
    "paddingBottom": 10,
    "paddingLeft": 10,
    "backgroundOpacity": 0,
    "paddingRight": 10,
    "height": "50%",
    "width": "100%",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "paddingTop": 10,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "borderRadius": 0,
    "id": "htmlText_uidA1C5836C_ADF1_A85B_41DB_4E2161723535",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u0648\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u062f\u0631\u0633\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0644\u0644\u0639\u0644\u0648\u0645 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u064a\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0628\u0627\u0644\u062c\u0627\u0645\u0639\u0629- ENSAJ- \u0641\u064a \u062c\u0627\u0645\u0639\u0629 \u0634\u0639\u064a\u0628 \u062f\u0643\u0627\u0644\u064a- UCD- \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u060c \u0642\u0644\u0628 \u062d\u0648\u0636 \u0635\u0646\u0627\u0639\u064a \u0645\u0647\u0645 \u064a\u0645\u062a\u062f \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u062a\u0644\u0628\u064a\u0629 \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u064a\u0646\u0645\u0648 \u0641\u064a \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0647\u0646\u062f\u0633\u064a \u0641\u064a \u0628\u0644\u0627\u062f\u0646\u0627</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u0627\u0633\u062a\u0641\u0627\u062f\u0629 \u0645\u0646 \u0645\u062b\u0644 \u0647\u0630\u0647 \u0627\u0644\u0628\u064a\u0626\u0629 \u060c \u062a\u062a\u0645\u062b\u0644 \u0645\u0647\u0645\u0629 ENSAJ \u0641\u064a \u0627\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u062a\u0648\u0641\u064a\u0631 \u0639\u0631\u0636 \u062a\u062f\u0631\u064a\u062c\u064a \u062a\u062f\u0631\u064a\u0628\u064a \u0641\u064a \u0643\u0641\u0627\u064a\u0629 \u062f\u0627\u0626\u0645\u0629 \u0645\u0639 \u0627\u0644\u0645\u0647\u0646 \u0648\u0627\u0644\u0645\u0647\u0646 \u0627\u0644\u0646\u0627\u062a\u062c\u0629 \u0639\u0646 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0648\u0627\u0644\u062f\u0648\u0644\u064a\u0629 \u060c \u0644\u062d\u0642\u0646 \u0627\u0644\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629 \u0644\u0644\u0628\u062d\u062b \u0627\u0644\u0639\u0644\u0645\u064a.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0644\u0625\u0646\u062c\u0627\u0632 \u0647\u0630\u0647 \u0627\u0644\u0645\u0647\u0645\u0629 \u060c \u062a\u0628\u0646\u064a ENSAJ \u0639\u0645\u0644\u0647\u0627 \u0639\u0644\u0649 \u062b\u0644\u0627\u062b\u0629 \u0631\u0627\u0641\u0639\u0627\u062a \u0623\u0633\u0627\u0633\u064a\u0629:</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629 \u0641\u0631\u0642\u0647\u0627 \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629 \u0627\u0644\u062a\u064a \u0644\u0627 \u064a\u0645\u0643\u0646 \u0625\u0646\u0643\u0627\u0631\u0647\u0627</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0648\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0627\u0644\u0634\u0631\u0627\u0643\u0629 \u0645\u0639 \u0627\u0644\u0639\u0627\u0645\u0644\u064a\u0646 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u064a\u0646 \u0648\u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u064a\u0646</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645 \u0648\u0631\u0648\u062d \u0627\u0644\u0627\u0646\u062a\u0645\u0627\u0621 \u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0647\u0646\u062f\u0633\u0629</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0631\u0627\u0641\u0639\u0627\u062a \u060c \u062a\u0644\u062a\u0632\u0645 ENSAJ \u0628\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0636\u0645\u0627\u0646 \u0636\u0645\u0627\u0646 \u0627\u0644\u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0645\u0633\u062a\u062f\u0627\u0645\u0629 \u0644\u0644\u0645\u062f\u0631\u0633\u0629 \u060c \u0648\u062a\u0631\u0633\u064a\u062e \u0648\u062a\u0631\u0633\u064a\u062e \u0631\u0633\u0648\u062e\u0647\u0627 \u0641\u064a \u0627\u0644\u0646\u0633\u064a\u062c \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a \u0648\u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a \u0648\u0627\u0644\u062b\u0642\u0627\u0641\u064a \u060c \u0644\u0645\u0648\u0627\u0635\u0644\u0629 \u062a\u0639\u0632\u064a\u0632 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0648\u0627\u0644\u0628\u062d\u062b \u0627\u0644\u0639\u0644\u0645\u064a \u0641\u064a \u0645\u0631\u062a\u0628\u0629 \u0627\u0644\u0627\u0645\u062a\u064a\u0627\u0632 \u0648\u0627\u0644\u0627\u0646\u0641\u062a\u0627\u062d \u0623\u0643\u062b\u0631 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u062d\u0629 \u0627\u0644\u062f\u0648\u0644\u064a\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u062f\u0639\u0645 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u0639 \u0645\u0647\u0646\u0629 \u0644\u0644\u062a\u062f\u0631\u064a\u0628 \u0648\u0627\u0644\u0628\u062d\u062b.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0641\u064a \u0646\u0647\u0627\u064a\u0629 \u062f\u0631\u0627\u0633\u062a\u0647\u0645 \u060c \u064a\u062c\u062f \u0637\u0644\u0627\u0628 \u0627\u0644\u0647\u0646\u062f\u0633\u0629 \u0641\u064a ENSAJ \u0623\u0646\u0641\u0633\u0647\u0645 \u0645\u0648\u0647\u0648\u0628\u064a\u0646 \u0628\u0645\u0647\u0627\u0631\u0627\u062a \u0639\u0644\u0645\u064a\u0629 \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062c\u0648\u062f\u0629 \u0648\u0631\u0648\u062d \u0645\u062f\u0646\u064a\u0629 \u0648\u062b\u0642\u0627\u0641\u0629 \u0639\u0627\u0645\u0629 \u0648\u0627\u0633\u0639\u0629 \u0648\u0645\u0639\u0631\u0641\u0629 \u062c\u064a\u062f\u0629 \u0628\u0627\u0644\u0634\u0631\u0643\u0629.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u062a\u062a\u064a\u062d \u0644\u0643 \u0632\u064a\u0627\u0631\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0643\u062a\u0634\u0627\u0641 \u0627\u0644\u0628\u064a\u0626\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0645\u0646\u0634\u0623\u0629 \u0648\u0643\u0630\u0644\u0643 \u062c\u0645\u064a\u0639 \u0623\u0646\u0634\u0637\u062a\u0647\u0627.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0645\u0631\u062d\u0628\u0627 !</SPAN></DIV></div>",
    "scrollBarOpacity": 0.5,
    "data": {
     "name": "HTMLText1218"
    },
    "class": "HTMLText",
    "minWidth": 0,
    "shadow": false
   }
  ],
  "headerVerticalAlign": "middle",
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "shadowBlurRadius": 6,
  "minWidth": 20,
  "width": 600,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "height": 800,
  "closeButtonIconColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBackgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "bodyBorderSize": 0,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "bodyPaddingLeft": 5,
  "titleFontStyle": "normal",
  "closeButtonIconHeight": 12,
  "titleFontSize": 14,
  "titleFontColor": "#000000",
  "bodyBorderColor": "#000000",
  "scrollBarVisible": "rollOver",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "bodyBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "id": "window_B3F114FA_AC0F_C033_41C6_E56443A7BD65",
  "headerBorderSize": 0,
  "bodyPaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "data": {
   "name": "Window54242"
  },
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconWidth": 12,
  "overflow": "scroll",
  "headerBackgroundOpacity": 1,
  "titleTextDecoration": "none",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0
 },
 {
  "verticalAlign": "middle",
  "closeButtonBackgroundColor": [],
  "titleFontWeight": "normal",
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "shadow": true,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "paddingLeft": 0,
  "bodyBackgroundOpacity": 1,
  "gap": 10,
  "shadowOpacity": 0.5,
  "paddingRight": 0,
  "modal": true,
  "titlePaddingLeft": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "creationPolicy": "delayed",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "closeButtonBorderRadius": 11,
  "title": "Administration",
  "footerBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "bodyPaddingTop": 5,
  "headerPaddingRight": 10,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "backgroundColorRatios": [],
  "layout": "vertical",
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "headerPaddingBottom": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyPaddingRight": 5,
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "class": "Window",
  "headerBackgroundColorDirection": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "height": "50%",
    "width": "100%",
    "url": "media/photo_B63E45C0_AC12_404F_41C5_EF9FFDF7CE84.jpg",
    "borderSize": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "paddingTop": 0,
    "minHeight": 0,
    "borderRadius": 0,
    "id": "image_uidA1C6B37B_ADF1_A83C_41D6_88BAE603C8A1_0",
    "data": {
     "name": "Image1219"
    },
    "class": "Image",
    "minWidth": 0,
    "shadow": false
   },
   {
    "paddingBottom": 10,
    "paddingLeft": 10,
    "backgroundOpacity": 0,
    "paddingRight": 10,
    "height": "50%",
    "width": "100%",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "paddingTop": 10,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "borderRadius": 0,
    "id": "htmlText_uidA1C6B37B_ADF1_A83C_41D6_88BAE603C8A1",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\"><B>R\u00e9ception</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "scrollBarOpacity": 0.5,
    "data": {
     "name": "HTMLText1220"
    },
    "class": "HTMLText",
    "minWidth": 0,
    "shadow": false
   }
  ],
  "headerVerticalAlign": "middle",
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "shadowBlurRadius": 6,
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "height": 600,
  "closeButtonIconColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBackgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "bodyBorderSize": 0,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "bodyPaddingLeft": 5,
  "titleFontStyle": "normal",
  "closeButtonIconHeight": 12,
  "titleFontSize": 14,
  "titleFontColor": "#000000",
  "bodyBorderColor": "#000000",
  "scrollBarVisible": "rollOver",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "bodyBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "id": "window_B10D4105_AC16_41D1_41E3_E905EC3C9C30",
  "headerBorderSize": 0,
  "bodyPaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "data": {
   "name": "Window45761"
  },
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconWidth": 12,
  "overflow": "scroll",
  "headerBackgroundOpacity": 1,
  "titleTextDecoration": "none",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0
 },
 {
  "verticalAlign": "middle",
  "closeButtonBackgroundColor": [],
  "titleFontWeight": "normal",
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "shadow": true,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "paddingLeft": 0,
  "bodyBackgroundOpacity": 1,
  "gap": 10,
  "shadowOpacity": 0.5,
  "paddingRight": 0,
  "modal": true,
  "titlePaddingLeft": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "creationPolicy": "delayed",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "closeButtonBorderRadius": 11,
  "title": "Mot de Directeur",
  "footerBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "bodyPaddingTop": 5,
  "headerPaddingRight": 10,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "backgroundColorRatios": [],
  "layout": "vertical",
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "headerPaddingBottom": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyPaddingRight": 5,
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "class": "Window",
  "headerBackgroundColorDirection": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "height": "50%",
    "width": "100%",
    "url": "media/photo_B3563C3B_AC0E_4031_41D5_7AC856FCC4F1.jpg",
    "borderSize": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "paddingTop": 0,
    "minHeight": 0,
    "borderRadius": 0,
    "id": "image_uidA1C7337B_ADF1_A83C_41E5_65116D32284F_0",
    "data": {
     "name": "Image1221"
    },
    "class": "Image",
    "minWidth": 0,
    "shadow": false
   },
   {
    "paddingBottom": 10,
    "paddingLeft": 10,
    "backgroundOpacity": 0,
    "paddingRight": 10,
    "height": "50%",
    "width": "100%",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "paddingTop": 10,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "borderRadius": 0,
    "id": "htmlText_uidA1C7337B_ADF1_A83C_41E5_65116D32284F",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">L\u2019Ecole Nationale des Sciences Appliqu\u00e9es d\u2019El Jadida -ENSAJ- a \u00e9t\u00e9 cr\u00e9\u00e9e et implant\u00e9e \u00e0 l\u2019Universit\u00e9 Chouaib Doukkali \u2013UCD- de la ville d\u2019El Jadida, c\u0153ur d\u2019un important bassin industriel en pleine extension pour r\u00e9pondre aux besoins croissants en formations d\u2019ing\u00e9nieurs dans notre pays</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">B\u00e9n\u00e9ficiant d\u2019un tel environnement, l\u2019ENSAJ a pour missions d\u2019\u0153uvrer \u00e0 dispenser une offre de formation \u00e9volutive en ad\u00e9quation permanente avec les m\u00e9tiers et professions g\u00e9n\u00e9r\u00e9s par les mutations \u00e9conomiques nationale et internationale, insuffler un dynamisme pour la recherche scientifique.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pour accomplir cette mission, l\u2019ENSAJ b\u00e2tit son action sur trois leviers essentiels :</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">le dynamisme incontestable de ses \u00e9quipes p\u00e9dagogique et administrative</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">les comp\u00e9tences locales, les moyens disponibles et les actions de partenariats d\u00e9velopp\u00e9es avec les op\u00e9rateurs socio\u00e9conomiques</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">l\u2019engagement et l\u2019esprit d\u2019appartenance des \u00e9l\u00e8ves ing\u00e9nieurs</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Se basant sur ces leviers l\u2019ENSAJ engage sa politique de gouvernance en visant \u00e0 assurer un d\u00e9veloppement p\u00e9renne de l\u2019\u00e9cole, \u00e0 assoir et consolider son ancrage dans le tissu socio-\u00e9conomique et culturel, \u00e0 promouvoir davantage la formation et la recherche scientifique au rang de l\u2019excellence et \u00e0 s\u2019ouvrir davantage \u00e0 l\u2019international par des projets d\u2019accompagnement \u00e0 vocation de formation et recherche.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Au terme de leur cursus, les \u00e9l\u00e8ves ing\u00e9nieurs de l\u2019ENSAJ se retrouvent alors dot\u00e9s de comp\u00e9tences scientifiques de qualit\u00e9, d\u2019un esprit citoyen, d\u2019une large culture g\u00e9n\u00e9rale et d\u2019une bonne connaissance de l\u2019entreprise.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">La visite du pr\u00e9sent site web vous permettra de d\u00e9couvrir l\u2019environnement g\u00e9n\u00e9ral de l\u2019\u00e9tablissement ainsi que l\u2019ensemble de ses activit\u00e9s.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bienvenue !</SPAN></DIV></div>",
    "scrollBarOpacity": 0.5,
    "data": {
     "name": "HTMLText1222"
    },
    "class": "HTMLText",
    "minWidth": 0,
    "shadow": false
   }
  ],
  "headerVerticalAlign": "middle",
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "shadowBlurRadius": 6,
  "minWidth": 20,
  "width": 600,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "height": 800,
  "closeButtonIconColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBackgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "bodyBorderSize": 0,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "bodyPaddingLeft": 5,
  "titleFontStyle": "normal",
  "closeButtonIconHeight": 12,
  "titleFontSize": 14,
  "titleFontColor": "#000000",
  "bodyBorderColor": "#000000",
  "scrollBarVisible": "rollOver",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "bodyBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "id": "window_B3DD24E4_AC16_C057_41E0_8CD74C71B563",
  "headerBorderSize": 0,
  "bodyPaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "data": {
   "name": "Window56188"
  },
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconWidth": 12,
  "overflow": "scroll",
  "headerBackgroundOpacity": 1,
  "titleTextDecoration": "none",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0
 },
 {
  "verticalAlign": "middle",
  "closeButtonBackgroundColor": [],
  "titleFontWeight": "normal",
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "shadow": true,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "paddingLeft": 0,
  "bodyBackgroundOpacity": 1,
  "gap": 10,
  "shadowOpacity": 0.5,
  "paddingRight": 0,
  "modal": true,
  "titlePaddingLeft": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "creationPolicy": "delayed",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "closeButtonBorderRadius": 11,
  "title": "A word from the director",
  "footerBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "bodyPaddingTop": 5,
  "headerPaddingRight": 10,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "backgroundColorRatios": [],
  "layout": "vertical",
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "headerPaddingBottom": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyPaddingRight": 5,
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "class": "Window",
  "headerBackgroundColorDirection": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "height": "50%",
    "width": "100%",
    "url": "media/photo_B3563C3B_AC0E_4031_41D5_7AC856FCC4F1.jpg",
    "borderSize": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "paddingTop": 0,
    "minHeight": 0,
    "borderRadius": 0,
    "id": "image_uidA1C8138B_ADF1_A8DC_41D3_90AE16C2AB2F_0",
    "data": {
     "name": "Image1223"
    },
    "class": "Image",
    "minWidth": 0,
    "shadow": false
   },
   {
    "paddingBottom": 10,
    "paddingLeft": 10,
    "backgroundOpacity": 0,
    "paddingRight": 10,
    "height": "50%",
    "width": "100%",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "paddingTop": 10,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "borderRadius": 0,
    "id": "htmlText_uidA1C8138B_ADF1_A8DC_41D3_90AE16C2AB2F",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The National School of Applied Sciences of El Jadida -ENSAJ- was created and established at the University Chouaib Doukkali \u2013UCD- of the city of El Jadida, the heart of an important industrial basin in full extension to meet the needs growing in engineering training in our country</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Benefiting from such an environment, the ENSAJ's mission is to work to provide a progressive training offer in permanent adequacy with the trades and professions generated by national and international economic changes, to inject dynamism for scientific research.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">To accomplish this mission, the ENSAJ builds its action on three essential levers:</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">the undeniable dynamism of its educational and administrative teams</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">local skills, available resources and partnership actions developed with socio-economic operators</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">the commitment and the spirit of belonging of the engineering students</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Based on these levers, the ENSAJ commits to its governance policy by aiming to ensure the sustainable development of the school, to establish and consolidate its anchoring in the socio-economic and cultural fabric, to further promote training and scientific research in rank of excellence and to open up more to the international stage through support projects with a vocation for training and research.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">At the end of their course, the engineering students of the ENSAJ then find themselves endowed with quality scientific skills, a civic spirit, a broad general culture and a good knowledge of the company.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Visiting this website will allow you to discover the general environment of the establishment as well as all of its activities.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Welcome !</SPAN></DIV></div>",
    "scrollBarOpacity": 0.5,
    "data": {
     "name": "HTMLText1224"
    },
    "class": "HTMLText",
    "minWidth": 0,
    "shadow": false
   }
  ],
  "headerVerticalAlign": "middle",
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "shadowBlurRadius": 6,
  "minWidth": 20,
  "width": 600,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "height": 800,
  "closeButtonIconColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBackgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "bodyBorderSize": 0,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "bodyPaddingLeft": 5,
  "titleFontStyle": "normal",
  "closeButtonIconHeight": 12,
  "titleFontSize": 14,
  "titleFontColor": "#000000",
  "bodyBorderColor": "#000000",
  "scrollBarVisible": "rollOver",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "bodyBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "id": "window_B3E4431C_AC13_C1F7_41B8_C4A543AE3B80",
  "headerBorderSize": 0,
  "bodyPaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "data": {
   "name": "Window57508"
  },
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconWidth": 12,
  "overflow": "scroll",
  "headerBackgroundOpacity": 1,
  "titleTextDecoration": "none",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0
 },
 {
  "verticalAlign": "middle",
  "closeButtonBackgroundColor": [],
  "titleFontWeight": "normal",
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "shadow": true,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "paddingLeft": 0,
  "bodyBackgroundOpacity": 1,
  "gap": 10,
  "shadowOpacity": 0.5,
  "paddingRight": 0,
  "modal": true,
  "titlePaddingLeft": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "creationPolicy": "delayed",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "closeButtonBorderRadius": 11,
  "title": "Administration-English",
  "footerBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "bodyPaddingTop": 5,
  "headerPaddingRight": 10,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "backgroundColorRatios": [],
  "layout": "vertical",
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "headerPaddingBottom": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyPaddingRight": 5,
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "class": "Window",
  "headerBackgroundColorDirection": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "height": "50%",
    "width": "100%",
    "url": "media/photo_B63E45C0_AC12_404F_41C5_EF9FFDF7CE84.jpg",
    "borderSize": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "paddingTop": 0,
    "minHeight": 0,
    "borderRadius": 0,
    "id": "image_uidA1C9D39A_ADF1_A8FC_41E3_7D8E64AD117A_0",
    "data": {
     "name": "Image1225"
    },
    "class": "Image",
    "minWidth": 0,
    "shadow": false
   },
   {
    "paddingBottom": 10,
    "paddingLeft": 10,
    "backgroundOpacity": 0,
    "paddingRight": 10,
    "height": "50%",
    "width": "100%",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "paddingTop": 10,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "borderRadius": 0,
    "id": "htmlText_uidA1C9D39A_ADF1_A8FC_41E3_7D8E64AD117A",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:17px;\"><B>Administration</B></SPAN></SPAN></DIV></div>",
    "scrollBarOpacity": 0.5,
    "data": {
     "name": "HTMLText1226"
    },
    "class": "HTMLText",
    "minWidth": 0,
    "shadow": false
   }
  ],
  "headerVerticalAlign": "middle",
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "shadowBlurRadius": 6,
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "height": 600,
  "closeButtonIconColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBackgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "bodyBorderSize": 0,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "bodyPaddingLeft": 5,
  "titleFontStyle": "normal",
  "closeButtonIconHeight": 12,
  "titleFontSize": 14,
  "titleFontColor": "#000000",
  "bodyBorderColor": "#000000",
  "scrollBarVisible": "rollOver",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "bodyBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "id": "window_B11F72AB_AC12_40D1_41D0_C49D78CC6726",
  "headerBorderSize": 0,
  "bodyPaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "data": {
   "name": "Window47065"
  },
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconWidth": 12,
  "overflow": "scroll",
  "headerBackgroundOpacity": 1,
  "titleTextDecoration": "none",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A1AD63F8_ADF1_A83C_416B_6726A6B153EC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -87.97,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A1982417_ADF1_AFF4_41D8_7DD47226D5DA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.81,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A1849437_ADF1_A835_41C5_308A57BBEF86",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 149.92,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A1711456_ADF1_A874_41E2_7C77483B9F53",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 152.17,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A17E5475_ADF1_A834_41E4_16DCC20F111B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 149.1,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A16CD494_ADF1_A8F4_41C3_DF91248BE33B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -87.36,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A159A4C3_ADF1_A84C_41DB_5B70AE8E5387",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -120.99,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A14854D3_ADF1_A84C_41C1_22751FF8AFBD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.08,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A1360502_ADF1_A9CC_41D4_06A178463112",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -115.67,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A1233511_ADF1_A9CC_4198_E0D8DF8B2DA6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.08,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A1118531_ADF1_A9CD_41E0_95CA69E6D054",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -119.25,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A11F4540_ADF1_A84C_41D4_93418D49ADFC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.29,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.audio_B9032BA1_AC12_40D1_41DA_745FA4ECA2C8",
 "this.audio_B87C9DF8_AC16_C03F_41D0_C8B539321DD2",
 "this.audio_B8FE3602_AC0E_43D3_41D1_F116C2E04BD4",
 {
  "label": "IMG-20200319-WA0132",
  "class": "Photo",
  "width": 1280,
  "id": "photo_B63E45C0_AC12_404F_41C5_EF9FFDF7CE84",
  "height": 720,
  "thumbnailUrl": "media/photo_B63E45C0_AC12_404F_41C5_EF9FFDF7CE84_t.jpg",
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
  "label": "INTRO",
  "video": {
   "width": 1280,
   "height": 720,
   "mp4Url": "media/video_B3F568FF_AC15_C031_41E1_207F2120C3F9.mp4",
   "class": "VideoResource"
  },
  "width": 1280,
  "id": "video_B3F568FF_AC15_C031_41E1_207F2120C3F9",
  "loop": false,
  "class": "Video",
  "height": 720,
  "thumbnailUrl": "media/video_B3F568FF_AC15_C031_41E1_207F2120C3F9_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "label": "portrait-azim-1",
  "class": "Photo",
  "width": 200,
  "id": "photo_B3563C3B_AC0E_4031_41D5_7AC856FCC4F1",
  "height": 273,
  "thumbnailUrl": "media/photo_B3563C3B_AC0E_4031_41D5_7AC856FCC4F1_t.jpg",
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
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBottom": 10,
  "playbackBarHeight": 20,
  "playbackBarHeadOpacity": 1,
  "paddingLeft": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBorderColor": "#AAAAAA",
  "shadow": false,
  "toolTipBorderColor": "#767676",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "paddingRight": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#AAAAAA",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingTop": 0,
  "transitionDuration": 500,
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 4,
  "playbackBarHeadBorderSize": 0,
  "minHeight": 50,
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarHeadWidth": 6,
  "toolTipShadowColor": "#333333",
  "toolTipDisplayTime": 600,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "transitionMode": "blending",
  "class": "ViewerArea",
  "progressLeft": 10,
  "playbackBarRight": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowHorizontalLength": 0,
  "minWidth": 100,
  "toolTipPaddingLeft": 6,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontWeight": "normal",
  "toolTipFontSize": 12,
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderSize": 1,
  "progressRight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressOpacity": 1,
  "width": "100%",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingRight": 6,
  "borderSize": 0,
  "height": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipFontFamily": "Arial",
  "toolTipPaddingTop": 4,
  "playbackBarOpacity": 1,
  "progressBarOpacity": 1,
  "progressHeight": 20,
  "top": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "borderRadius": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "progressBarBorderSize": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderRadius": 3,
  "progressBorderRadius": 4,
  "progressBottom": 1,
  "playbackBarLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadHeight": 30,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "left": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipOpacity": 1,
  "progressBarBorderColor": "#000000",
  "paddingBottom": 0
 },
 {
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "gap": 1,
  "height": 169,
  "width": "70.38%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "creationPolicy": "delayed",
  "paddingTop": 0,
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "minHeight": 1,
  "layout": "horizontal",
  "bottom": "0%",
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "data": {
   "name": "Container16156"
  },
  "overflow": "scroll",
  "left": "14.67%",
  "class": "Container",
  "minWidth": 1,
  "children": [
   {
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "gap": 4,
    "height": "100%",
    "width": 660,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "creationPolicy": "delayed",
    "paddingTop": 0,
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "minHeight": 20,
    "layout": "horizontal",
    "borderRadius": 0,
    "id": "Container_52846DFF_5EE9_1541_41C9_642ADAAC6926",
    "scrollBarOpacity": 0.5,
    "data": {
     "name": "Container6716"
    },
    "overflow": "hidden",
    "class": "Container",
    "minWidth": 392,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "gap": 4,
      "height": "76.757%",
      "width": "59.848%",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "scrollBarWidth": 10,
      "horizontalAlign": "center",
      "creationPolicy": "delayed",
      "paddingTop": 0,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 20,
      "layout": "horizontal",
      "borderRadius": 0,
      "id": "Container_B880C10F_ACF6_41D1_41E0_47ABF8A08019",
      "scrollBarOpacity": 0.5,
      "data": {
       "name": "Container8703"
      },
      "overflow": "hidden",
      "class": "Container",
      "minWidth": 20,
      "children": [
       "this.IconButton_B887F10F_ACF6_41D1_41DD_4F1FCB466919",
       "this.IconButton_B887E10F_ACF6_41D1_41CC_1BB6785D38CE",
       "this.IconButton_B887D10F_ACF6_41D1_41A3_88E4EBD8B8B7",
       "this.IconButton_B887B10F_ACF6_41D1_41C0_3ABADFCB9292",
       {
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "paddingRight": 0,
        "gap": 4,
        "height": "100%",
        "width": 40,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "scrollBarWidth": 10,
        "horizontalAlign": "center",
        "creationPolicy": "delayed",
        "paddingTop": 0,
        "contentOpaque": false,
        "scrollBarVisible": "rollOver",
        "minHeight": 20,
        "layout": "vertical",
        "borderRadius": 0,
        "id": "Container_B887910F_ACF6_41D1_41E1_3B2DB606BC3F",
        "scrollBarOpacity": 0.5,
        "data": {
         "name": "Container8708"
        },
        "overflow": "hidden",
        "class": "Container",
        "minWidth": 20,
        "children": [
         "this.IconButton_B887710F_ACF6_41D1_41C3_D4A7E360C1AF",
         "this.IconButton_B887610F_ACF6_41D1_41DD_18CA17947F60",
         "this.IconButton_B887510F_ACF6_41D1_41D5_F54C31543830"
        ],
        "shadow": false
       },
       "this.IconButton_B887310F_ACF6_41D1_41D1_EC5132DA4A62",
       "this.IconButton_B887110F_ACF6_41D1_41D8_1F72B26C6770",
       {
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "mode": "toggle",
        "paddingRight": 0,
        "height": 40,
        "width": 40,
        "iconURL": "skin/IconButton_B880F10F_ACF6_41D1_41E3_CA706652D494.png",
        "borderSize": 0,
        "horizontalAlign": "center",
        "paddingTop": 0,
        "minHeight": 0,
        "cursor": "hand",
        "borderRadius": 0,
        "id": "IconButton_B880F10F_ACF6_41D1_41E3_CA706652D494",
        "transparencyActive": true,
        "class": "IconButton",
        "pressedIconURL": "skin/IconButton_B880F10F_ACF6_41D1_41E3_CA706652D494_pressed.png",
        "data": {
         "name": "Button8714"
        },
        "minWidth": 0,
        "shadow": false
       },
       "this.IconButton_B880E10F_ACF6_41D1_4184_7E0468B62228"
      ],
      "shadow": false
     }
    ],
    "shadow": false
   }
  ],
  "shadow": false
 },
 {
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "mode": "push",
  "paddingRight": 0,
  "height": 42,
  "width": 92,
  "maxWidth": 42,
  "iconURL": "skin/IconButton_BD91ED5A_AC3D_C073_41E0_B25754B6B096.png",
  "borderSize": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "minHeight": 1,
  "cursor": "hand",
  "borderRadius": 0,
  "bottom": "5.76%",
  "id": "IconButton_BD91ED5A_AC3D_C073_41E0_B25754B6B096",
  "maxHeight": 42,
  "transparencyActive": false,
  "class": "IconButton",
  "data": {
   "name": "IconButton13323"
  },
  "minWidth": 1,
  "right": "2.26%",
  "shadow": false
 },
 {
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "mode": "push",
  "paddingRight": 0,
  "height": 51,
  "width": 45,
  "maxWidth": 512,
  "iconURL": "skin/IconButton_BEF3C076_AC16_4033_41DB_E72D09F2784A.png",
  "borderSize": 0,
  "horizontalAlign": "center",
  "click": "this.mainPlayList.set('selectedIndex', 0)",
  "paddingTop": 0,
  "minHeight": 1,
  "cursor": "hand",
  "borderRadius": 0,
  "bottom": "5.92%",
  "id": "IconButton_BEF3C076_AC16_4033_41DB_E72D09F2784A",
  "maxHeight": 512,
  "transparencyActive": false,
  "left": "1.18%",
  "class": "IconButton",
  "data": {
   "name": "IconButton17175"
  },
  "minWidth": 1,
  "shadow": false
 },
 {
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "mode": "push",
  "paddingRight": 0,
  "height": 79.05,
  "width": 41,
  "maxWidth": 512,
  "iconURL": "skin/IconButton_BEC84EA4_AC1E_C0D7_41D5_A7360B703C32.png",
  "borderSize": 0,
  "horizontalAlign": "center",
  "click": "this.mainPlayList.set('selectedIndex', 3)",
  "paddingTop": 0,
  "minHeight": 1,
  "cursor": "hand",
  "borderRadius": 0,
  "bottom": "3.95%",
  "id": "IconButton_BEC84EA4_AC1E_C0D7_41D5_A7360B703C32",
  "maxHeight": 512,
  "transparencyActive": false,
  "left": "5.89%",
  "class": "IconButton",
  "data": {
   "name": "IconButton19210"
  },
  "minWidth": 1,
  "shadow": false
 },
 {
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "mode": "push",
  "paddingRight": 0,
  "height": 40,
  "width": 46,
  "maxWidth": 512,
  "iconURL": "skin/IconButton_BF562674_AC1D_C037_41E3_1FB44F7212C1.png",
  "borderSize": 0,
  "horizontalAlign": "center",
  "click": "this.mainPlayList.set('selectedIndex', 8)",
  "paddingTop": 0,
  "minHeight": 1,
  "cursor": "hand",
  "borderRadius": 0,
  "bottom": "6.74%",
  "id": "IconButton_BF562674_AC1D_C037_41E3_1FB44F7212C1",
  "maxHeight": 512,
  "transparencyActive": false,
  "left": "10.51%",
  "class": "IconButton",
  "data": {
   "name": "IconButton20282"
  },
  "minWidth": 1,
  "shadow": false
 },
 {
  "verticalAlign": "top",
  "paddingBottom": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "backgroundOpacity": 0.3,
  "paddingLeft": 0,
  "gap": 10,
  "height": "42.928%",
  "width": "18.297%",
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "creationPolicy": "delayed",
  "paddingTop": 0,
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "minHeight": 1,
  "top": "0.33%",
  "layout": "absolute",
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_B411424C_AC32_4057_41E5_5482459E7149",
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "data": {
   "name": "Container31701"
  },
  "overflow": "scroll",
  "class": "Container",
  "minWidth": 1,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "selectedPopUpBackgroundColor": "#33CCFF",
    "popUpShadowOpacity": 0,
    "paddingBottom": 0,
    "popUpBackgroundOpacity": 0.72,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "backgroundOpacity": 0.72,
    "fontSize": 14,
    "paddingLeft": 5,
    "gap": 0,
    "textDecoration": "none",
    "paddingRight": 5,
    "height": "3.618%",
    "fontFamily": "Arial",
    "popUpShadowSpread": 1,
    "borderSize": 0,
    "popUpShadowColor": "#000000",
    "fontStyle": "normal",
    "popUpShadowBlurRadius": 6,
    "paddingTop": 0,
    "popUpBorderRadius": 0,
    "rollOverPopUpBackgroundColor": "#CCCCCC",
    "arrowColor": "#8A8A8A",
    "minHeight": 20,
    "top": "0%",
    "fontWeight": "normal",
    "backgroundColorRatios": [
     0
    ],
    "popUpFontColor": "#000000",
    "id": "DropDown_BA5205B3_AC3F_C031_41B3_43AD6399C6BA",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "arrowBeforeLabel": false,
    "playList": "this.DropDown_BA5205B3_AC3F_C031_41B3_43AD6399C6BA_playlist",
    "data": {
     "name": "DropDown1204"
    },
    "left": "0%",
    "popUpBackgroundColor": "#FFFFFF",
    "class": "DropDown",
    "minWidth": 200,
    "right": "0%",
    "fontColor": "#333333",
    "popUpShadow": false,
    "shadow": false
   }
  ],
  "shadow": false
 }
], 
 "verticalAlign": "top",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "gap": 10,
 "height": "100%",
 "width": "100%",
 "paddingRight": 0,
 "buttonToggleMute": "this.IconButton_B880F10F_ACF6_41D1_41E3_CA706652D494",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "creationPolicy": "delayed",
 "vrPolyfillScale": 0.5,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "minHeight": 20,
 "layout": "absolute",
 "contentOpaque": false,
 "borderRadius": 0,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player14994"
 },
 "overflow": "visible",
 "mobileMipmappingEnabled": false,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } }
 },
 "class": "Player",
 "minWidth": 20,
 "start": "this.syncPlaylists([this.DropDown_BA5205B3_AC3F_C031_41B3_43AD6399C6BA_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.DropDown_BA5205B3_AC3F_C031_41B3_43AD6399C6BA_playlist.set('selectedIndex', 0)",
 "shadow": false
})