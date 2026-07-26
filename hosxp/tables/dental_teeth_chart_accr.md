# `dental_teeth_chart_accr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_teeth_chart_accr_id | int(11) | NO | PRI | 0 |  |  |
| dental_teeth_number | int(11) | YES | MUL | NULL |  |  |
| accr_name | varchar(100) | YES | MUL | NULL |  |  |
| chart_dtp_xml_data | longblob | YES |  | NULL |  |  |
| left_post | double(15,5) | YES |  | NULL |  |  |
| right_pos | double(15,5) | YES |  | NULL |  |  |
| symbol_name | varchar(100) | YES |  | NULL |  |  |
| teeth_docwidth | double(22,10) | YES |  | NULL |  |  |
| teeth_docheight | double(22,10) | YES |  | NULL |  |  |
| relative_pos_x | double(22,10) | YES |  | NULL |  |  |
| relative_pos_y | double(22,10) | YES |  | NULL |  |  |
| shape_width | double(22,10) | YES |  | NULL |  |  |
| shape_height | double(22,10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_teeth_number | dental_teeth_number | no | 1 |
| ix_tn_n | dental_teeth_number | yes | 1 |
| ix_tn_n | accr_name | yes | 2 |
| ix_tn_n_index | accr_name | yes | 1 |
| ix_tn_n_index | dental_teeth_number | yes | 2 |
| PRIMARY | dental_teeth_chart_accr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dental_teeth_chart_accr_id": 1,
    "dental_teeth_number": 18,
    "accr_name": "UPPER_LINE",
    "chart_dtp_xml_data": "b'<?xml version=\"1.0\" encoding=\"UTF-8\"?><shape class=\"dtpLineShape.TdtpPolyLineShape\"><Points><Point><X>0</X><Y>19.2044</Y></Point><Point><X>11.5844</X><Y>0</Y></Point><Point><X>33.0453</X><Y>3.56654</Y></Point><Point><X>55.0549</X><Y>2.74348</Y></Point><Point><X>62.7983</X><Y>17.8326</Y></Point></Points><LineWidth>0</LineWidth><ClassName>TdtpPolyLineShape</ClassName><AllowResize>true</AllowResize><AllowMove>true</AllowMove><AllowRotate>true</AllowRotate><AllowSelect>true</AllowSelect><AllowDelete>true</AllowDelete><AllowEdit>true</AllowEdit><Anchors><default>true</default><PosXProp>false</PosXProp><PosYProp>false</PosYProp><SizeXProp>false</SizeXProp><SizeYProp>false</SizeYProp><LeftLock>true</LeftLock><TopLock>true</TopLock><RightLock>false</RightLock><BottomLock>false</BottomLock></Anchors><AspectRatio>0</AspectRatio><CurbLeft>1</CurbLeft><CurbTop>1</CurbTop><CurbRight>1</CurbRight><CurbBottom>1</CurbBottom><ConstraintMinHeight>0</ConstraintMinHeight><ConstraintMinWidth>0</ConstraintMinWidth><ConstraintMaxHeight>0</ConstraintMaxHeight><ConstraintMaxWidth>0</ConstraintMaxWidth><DocAngle>0</DocAngle><DocLeft>66.2827</DocLeft><DocTop>87.609</DocTop><DocHeight>19.2044</DocHeight><DocWidth>62.7983</DocWidth><Flipped>false</Flipped><Grouped>false</Grouped><Mirrored>false</Mirrored><Name/><Code1/><Code2/><Code3/><Code4/><Code5/><PreserveAspect>false</PreserveAspect><Tag>0</Tag><Visible>true</Visible><MasterAlpha>$FF</MasterAlpha><OutlineWidth>2</OutlineWidth><FillAlpha>255</FillAlpha><FillColor>$00000000</FillColor><OutlineColor>$000000FF</OutlineColor><UseFill>false</UseFill><UseOutline>true</UseOutline><UseStipple>false</UseStipple><StippleSize>2</StippleSize><IsClosed>false</IsClosed><StorePoints>false</StorePoints><SavePoints>false</SavePoints></shape>'",
    "left_post": null,
    "right_pos": null,
    "symbol_name": null,
    "teeth_docwidth": 68.3393707275,
    "teeth_docheight": 330.0,
    "relative_pos_x": 0.4524307251,
    "relative_pos_y": 77.609046936,
    "shape_width": 62.7983474731,
    "shape_height": 19.2043991089
  },
  {
    "dental_teeth_chart_accr_id": 2,
    "dental_teeth_number": 17,
    "accr_name": "UPPER_LINE",
    "chart_dtp_xml_data": "b'<?xml version=\"1.0\" encoding=\"UTF-8\"?><shape class=\"dtpLineShape.TdtpPolyLineShape\"><ClassName>TdtpPolyLineShape</ClassName><AllowResize>true</AllowResize><AllowMove>true</AllowMove><AllowRotate>true</AllowRotate><AllowSelect>true</AllowSelect><AllowDelete>true</AllowDelete><AllowEdit>true</AllowEdit><Anchors><default>true</default><PosXProp>false</PosXProp><PosYProp>false</PosYProp><SizeXProp>false</SizeXProp><SizeYProp>false</SizeYProp><LeftLock>true</LeftLock><TopLock>true</TopLock><RightLock>false</RightLock><BottomLock>false</BottomLock></Anchors><AspectRatio>0</AspectRatio><CurbLeft>1</CurbLeft><CurbTop>1</CurbTop><CurbRight>1</CurbRight><CurbBottom>1</CurbBottom><ConstraintMinHeight>0</ConstraintMinHeight><ConstraintMinWidth>0</ConstraintMinWidth><ConstraintMaxHeight>0</ConstraintMaxHeight><ConstraintMaxWidth>0</ConstraintMaxWidth><DocAngle>0</DocAngle><DocLeft>69.8734741210938</DocLeft><DocTop>93.9456329345703</DocTop><DocHeight>15.8044013977051</DocHeight><DocWidth>56.8603973388672</DocWidth><Flipped>false</Flipped><Grouped>false</Grouped><Mirrored>false</Mirrored><Name/><Code1/><Code2/><Code3/><Code4/><Code5/><PreserveAspect>false</PreserveAspect><Tag>0</Tag><Visible>true</Visible><MasterAlpha>$FF</MasterAlpha><OutlineWidth>2</OutlineWidth><FillAlpha>255</FillAlpha><FillColor>$00000000</FillColor><OutlineColor>$000000FF</OutlineColor><UseFill>false</UseFill><UseOutline>true</UseOutline><UseStipple>false</UseStipple><StippleSize>2</StippleSize><IsClosed>false</IsClosed><StorePoints>false</StorePoints><SavePoints>false</SavePoints><Points><Point><X>0</X><Y>13.7733020782471</Y></Point><Point><X>9.14389228820801</X><Y>0</Y></Point><Point><X>28.8442001342773</X><Y>4.02010011672974</Y></Point><Point><X>51.3330993652344</X><Y>0.67950439453125</Y></Point><Point><X>56.8603973388672</X><Y>15.8044013977051</Y></Point></Points><LineWidth>0</LineWidth></shape>'",
    "left_post": null,
    "right_pos": null,
    "symbol_name": null,
    "teeth_docwidth": 62.0399971008,
    "teeth_docheight": 330.0,
    "relative_pos_x": 0.8934707642,
    "relative_pos_y": 83.9456329346,
    "shape_width": 56.8603973389,
    "shape_height": 15.8044013977
  },
  {
    "dental_teeth_chart_accr_id": 3,
    "dental_teeth_number": 16,
    "accr_name": "UPPER_LINE",
    "chart_dtp_xml_data": "b'<?xml version=\"1.0\" encoding=\"UTF-8\"?><shape class=\"dtpLineShape.TdtpPolyLineShape\"><ClassName>TdtpPolyLineShape</ClassName><AllowResize>true</AllowResize><AllowMove>true</AllowMove><AllowRotate>true</AllowRotate><AllowSelect>true</AllowSelect><AllowDelete>true</AllowDelete><AllowEdit>true</AllowEdit><Anchors><default>true</default><PosXProp>false</PosXProp><PosYProp>false</PosYProp><SizeXProp>false</SizeXProp><SizeYProp>false</SizeYProp><LeftLock>true</LeftLock><TopLock>true</TopLock><RightLock>false</RightLock><BottomLock>false</BottomLock></Anchors><AspectRatio>0</AspectRatio><CurbLeft>1</CurbLeft><CurbTop>1</CurbTop><CurbRight>1</CurbRight><CurbBottom>1</CurbBottom><ConstraintMinHeight>0</ConstraintMinHeight><ConstraintMinWidth>0</ConstraintMinWidth><ConstraintMaxHeight>0</ConstraintMaxHeight><ConstraintMaxWidth>0</ConstraintMaxWidth><DocAngle>0</DocAngle><DocLeft>66.920654296875</DocLeft><DocTop>94.6646423339844</DocTop><DocHeight>20.6118278503418</DocHeight><DocWidth>61.9459838867188</DocWidth><Flipped>false</Flipped><Grouped>false</Grouped><Mirrored>false</Mirrored><Name/><Code1/><Code2/><Code3/><Code4/><Code5/><PreserveAspect>false</PreserveAspect><Tag>0</Tag><Visible>true</Visible><MasterAlpha>$FF</MasterAlpha><OutlineWidth>2</OutlineWidth><FillAlpha>255</FillAlpha><FillColor>$00000000</FillColor><OutlineColor>$000000FF</OutlineColor><UseFill>false</UseFill><UseOutline>true</UseOutline><UseStipple>false</UseStipple><StippleSize>2</StippleSize><IsClosed>false</IsClosed><StorePoints>false</StorePoints><SavePoints>false</SavePoints><Points><Point><X>0</X><Y>16.8637561798096</Y></Point><Point><X>5.12475299835205</X><Y>2.75981616973877</Y></Point><Point><X>29.5589942932129</X><Y>2.35770893096924</Y></Point><Point><X>51.7995796203613</X><Y>0</Y></Point><Point><X>61.9459838867188</X><Y>20.6118278503418</Y></Point></Points><LineWidth>0</LineWidth></shape>'",
    "left_post": null,
    "right_pos": null,
    "symbol_name": null,
    "teeth_docwidth": 69.7976455688,
    "teeth_docheight": 330.0,
    "relative_pos_x": 1.8194732666,
    "relative_pos_y": 84.664642334,
    "shape_width": 61.9459838867,
    "shape_height": 20.6118278503
  },
  {
    "dental_teeth_chart_accr_id": 4,
    "dental_teeth_number": 15,
    "accr_name": "UPPER_LINE",
    "chart_dtp_xml_data": "b'<?xml version=\"1.0\" encoding=\"UTF-8\"?><shape class=\"dtpLineShape.TdtpPolyLineShape\"><ClassName>TdtpPolyLineShape</ClassName><AllowResize>true</AllowResize><AllowMove>true</AllowMove><AllowRotate>true</AllowRotate><AllowSelect>true</AllowSelect><AllowDelete>true</AllowDelete><AllowEdit>true</AllowEdit><Anchors><default>true</default><PosXProp>false</PosXProp><PosYProp>false</PosYProp><SizeXProp>false</SizeXProp><SizeYProp>false</SizeYProp><LeftLock>true</LeftLock><TopLock>true</TopLock><RightLock>false</RightLock><BottomLock>false</BottomLock></Anchors><AspectRatio>0</AspectRatio><CurbLeft>1</CurbLeft><CurbTop>1</CurbTop><CurbRight>1</CurbRight><CurbBottom>1</CurbBottom><ConstraintMinHeight>0</ConstraintMinHeight><ConstraintMinWidth>0</ConstraintMinWidth><ConstraintMaxHeight>0</ConstraintMaxHeight><ConstraintMaxWidth>0</ConstraintMaxWidth><DocAngle>0</DocAngle><DocLeft>75.301155090332</DocLeft><DocTop>90.6277008056641</DocTop><DocHeight>25.3307914733887</DocHeight><DocWidth>46.400146484375</DocWidth><Flipped>false</Flipped><Grouped>false</Grouped><Mirrored>false</Mirrored><Name/><Code1/><Code2/><Code3/><Code4/><Code5/><PreserveAspect>false</PreserveAspect><Tag>0</Tag><Visible>true</Visible><MasterAlpha>$FF</MasterAlpha><OutlineWidth>2</OutlineWidth><FillAlpha>255</FillAlpha><FillColor>$00000000</FillColor><OutlineColor>$000000FF</OutlineColor><UseFill>false</UseFill><UseOutline>true</UseOutline><UseStipple>false</UseStipple><StippleSize>2</StippleSize><IsClosed>false</IsClosed><StorePoints>false</StorePoints><SavePoints>false</SavePoints><Points><Point><X>0</X><Y>22.7937965393066</Y></Point><Point><X>8.17221450805664</X><Y>4.26828765869141</Y></Point><Point><X>23.4573364257813</X><Y>0</Y></Point><Point><X>35.8767318725586</X><Y>5.72036361694336</Y></Point><Point><X>46.400146484375</X><Y>25.3307914733887</Y></Point></Points><LineWidth>0</LineWidth></shape>'",
    "left_post": null,
    "right_pos": null,
    "symbol_name": null,
    "teeth_docwidth": 51.8542175293,
    "teeth_docheight": 330.0,
    "relative_pos_x": 1.228263855,
    "relative_pos_y": 80.6277008057,
    "shape_width": 46.4001464844,
    "shape_height": 25.3307914734
  },
  {
    "dental_teeth_chart_accr_id": 5,
    "dental_teeth_number": 14,
    "accr_name": "UPPER_LINE",
    "chart_dtp_xml_data": "b'<?xml version=\"1.0\" encoding=\"UTF-8\"?><shape class=\"dtpLineShape.TdtpPolyLineShape\"><ClassName>TdtpPolyLineShape</ClassName><AllowResize>true</AllowResize><AllowMove>true</AllowMove><AllowRotate>true</AllowRotate><AllowSelect>true</AllowSelect><AllowDelete>true</AllowDelete><AllowEdit>true</AllowEdit><Anchors><default>true</default><PosXProp>false</PosXProp><PosYProp>false</PosYProp><SizeXProp>false</SizeXProp><SizeYProp>false</SizeYProp><LeftLock>true</LeftLock><TopLock>true</TopLock><RightLock>false</RightLock><BottomLock>false</BottomLock></Anchors><AspectRatio>0</AspectRatio><CurbLeft>1</CurbLeft><CurbTop>1</CurbTop><CurbRight>1</CurbRight><CurbBottom>1</CurbBottom><ConstraintMinHeight>0</ConstraintMinHeight><ConstraintMinWidth>0</ConstraintMinWidth><ConstraintMaxHeight>0</ConstraintMaxHeight><ConstraintMaxWidth>0</ConstraintMaxWidth><DocAngle>0</DocAngle><DocLeft>74.0035934448242</DocLeft><DocTop>88.9680328369141</DocTop><DocHeight>24.4426231384277</DocHeight><DocWidth>51.1367416381836</DocWidth><Flipped>false</Flipped><Grouped>false</Grouped><Mirrored>false</Mirrored><Name/><Code1/><Code2/><Code3/><Code4/><Code5/><PreserveAspect>false</PreserveAspect><Tag>0</Tag><Visible>true</Visible><MasterAlpha>$FF</MasterAlpha><OutlineWidth>2</OutlineWidth><FillAlpha>255</FillAlpha><FillColor>$00000000</FillColor><OutlineColor>$000000FF</OutlineColor><UseFill>false</UseFill><UseOutline>true</UseOutline><UseStipple>false</UseStipple><StippleSize>2</StippleSize><IsClosed>false</IsClosed><StorePoints>false</StorePoints><SavePoints>false</SavePoints><Points><Point><X>0</X><Y>22.1608409881592</Y></Point><Point><X>9.67483997344971</X><Y>6.06285858154297</Y></Point><Point><X>22.2821464538574</X><Y>0</Y></Point><Point><X>40.4696388244629</X><Y>4.31768321990967</Y></Point><Point><X>51.1367416381836</X><Y>24.4426231384277</Y></Point></Points><LineWidth>0</LineWidth></shape>'",
    "left_post": null,
    "right_pos": null,
    "symbol_name": null,
    "teeth_docwidth": 56.0108985901,
    "teeth_docheight": 330.0,
    "relative_pos_x": 2.0090408325,
    "relative_pos_y": 78.9680328369,
    "shape_width": 51.1367416382,
    "shape_height": 24.4426231384
  },
  {
    "dental_teeth_chart_accr_id": 6,
    "dental_teeth_number": 13,
    "accr_name": "UPPER_LINE",
    "chart_dtp_xml_data": "b'<?xml version=\"1.0\" encoding=\"UTF-8\"?><shape class=\"dtpLineShape.TdtpPolyLineShape\"><ClassName>TdtpPolyLineShape</ClassName><AllowResize>true</AllowResize><AllowMove>true</AllowMove><AllowRotate>true</AllowRotate><AllowSelect>true</AllowSelect><AllowDelete>true</AllowDelete><AllowEdit>true</AllowEdit><Anchors><default>true</default><PosXProp>false</PosXProp><PosYProp>false</PosYProp><SizeXProp>false</SizeXProp><SizeYProp>false</SizeYProp><LeftLock>true</LeftLock><TopLock>true</TopLock><RightLock>false</RightLock><BottomLock>false</BottomLock></Anchors><AspectRatio>0</AspectRatio><CurbLeft>1</CurbLeft><CurbTop>1</CurbTop><CurbRight>1</CurbRight><CurbBottom>1</CurbBottom><ConstraintMinHeight>0</ConstraintMinHeight><ConstraintMinWidth>0</ConstraintMinWidth><ConstraintMaxHeight>0</ConstraintMaxHeight><ConstraintMaxWidth>0</ConstraintMaxWidth><DocAngle>0</DocAngle><DocLeft>79.7735137939453</DocLeft><DocTop>95.0118713378906</DocTop><DocHeight>24.7486419677734</DocHeight><DocWidth>43.5705947875977</DocWidth><Flipped>false</Flipped><Grouped>false</Grouped><Mirrored>false</Mirrored><Name/><Code1/><Code2/><Code3/><Code4/><Code5/><PreserveAspect>false</PreserveAspect><Tag>0</Tag><Visible>true</Visible><MasterAlpha>$FF</MasterAlpha><OutlineWidth>2</OutlineWidth><FillAlpha>255</FillAlpha><FillColor>$00000000</FillColor><OutlineColor>$000000FF</OutlineColor><UseFill>false</UseFill><UseOutline>true</UseOutline><UseStipple>false</UseStipple><StippleSize>2</StippleSize><IsClosed>false</IsClosed><StorePoints>false</StorePoints><SavePoints>false</SavePoints><Points><Point><X>0</X><Y>21.8130493164063</Y></Point><Point><X>6.35016632080078</X><Y>5.02950286865234</Y></Point><Point><X>16.7591934204102</X><Y>0</Y></Point><Point><X>31.1892623901367</X><Y>2.47265625</Y></Point><Point><X>43.5705947875977</X><Y>24.7486419677734</Y></Point></Points><LineWidth>0</LineWidth></shape>'",
    "left_post": null,
    "right_pos": null,
    "symbol_name": null,
    "teeth_docwidth": 52.5208206177,
    "teeth_docheight": 330.0,
    "relative_pos_x": 6.0339202881,
    "relative_pos_y": 85.0118713379,
    "shape_width": 43.5705947876,
    "shape_height": 24.7486419678
  },
  {
    "dental_teeth_chart_accr_id": 7,
    "dental_teeth_number": 12,
    "accr_name": "UPPER_LINE",
    "chart_dtp_xml_data": "b'<?xml version=\"1.0\" encoding=\"UTF-8\"?><shape class=\"dtpLineShape.TdtpPolyLineShape\"><ClassName>TdtpPolyLineShape</ClassName><AllowResize>true</AllowResize><AllowMove>true</AllowMove><AllowRotate>true</AllowRotate><AllowSelect>true</AllowSelect><AllowDelete>true</AllowDelete><AllowEdit>true</AllowEdit><Anchors><default>true</default><PosXProp>false</PosXProp><PosYProp>false</PosYProp><SizeXProp>false</SizeXProp><SizeYProp>false</SizeYProp><LeftLock>true</LeftLock><TopLock>true</TopLock><RightLock>false</RightLock><BottomLock>false</BottomLock></Anchors><AspectRatio>0</AspectRatio><CurbLeft>1</CurbLeft><CurbTop>1</CurbTop><CurbRight>1</CurbRight><CurbBottom>1</CurbBottom><ConstraintMinHeight>0</ConstraintMinHeight><ConstraintMinWidth>0</ConstraintMinWidth><ConstraintMaxHeight>0</ConstraintMaxHeight><ConstraintMaxWidth>0</ConstraintMaxWidth><DocAngle>0</DocAngle><DocLeft>75.4312591552734</DocLeft><DocTop>84.810546875</DocTop><DocHeight>29.8415908813477</DocHeight><DocWidth>46.1475448608398</DocWidth><Flipped>false</Flipped><Grouped>false</Grouped><Mirrored>false</Mirrored><Name/><Code1/><Code2/><Code3/><Code4/><Code5/><PreserveAspect>false</PreserveAspect><Tag>0</Tag><Visible>true</Visible><MasterAlpha>$FF</MasterAlpha><OutlineWidth>2</OutlineWidth><FillAlpha>255</FillAlpha><FillColor>$00000000</FillColor><OutlineColor>$000000FF</OutlineColor><UseFill>false</UseFill><UseOutline>true</UseOutline><UseStipple>false</UseStipple><StippleSize>2</StippleSize><IsClosed>false</IsClosed><StorePoints>false</StorePoints><SavePoints>false</SavePoints><Points><Point><X>0</X><Y>28.3076553344727</Y></Point><Point><X>5.99514007568359</X><Y>7.59717559814453</Y></Point><Point><X>21.2423782348633</X><Y>0</Y></Point><Point><X>36.0165634155273</X><Y>7.04418182373047</Y></Point><Point><X>46.1475448608398</X><Y>29.8415908813477</Y></Point></Points><LineWidth>0</LineWidth></shape>'",
    "left_post": null,
    "right_pos": null,
    "symbol_name": null,
    "teeth_docwidth": 54.9007797241,
    "teeth_docheight": 330.0,
    "relative_pos_x": 2.881652832,
    "relative_pos_y": 74.810546875,
    "shape_width": 46.1475448608,
    "shape_height": 29.8415908813
  },
  {
    "dental_teeth_chart_accr_id": 8,
    "dental_teeth_number": 11,
    "accr_name": "UPPER_LINE",
    "chart_dtp_xml_data": "b'<?xml version=\"1.0\" encoding=\"UTF-8\"?><shape class=\"dtpLineShape.TdtpPolyLineShape\"><ClassName>TdtpPolyLineShape</ClassName><AllowResize>true</AllowResize><AllowMove>true</AllowMove><AllowRotate>true</AllowRotate><AllowSelect>true</AllowSelect><AllowDelete>true</AllowDelete><AllowEdit>true</AllowEdit><Anchors><default>true</default><PosXProp>false</PosXProp><PosYProp>false</PosYProp><SizeXProp>false</SizeXProp><SizeYProp>false</SizeYProp><LeftLock>true</LeftLock><TopLock>true</TopLock><RightLock>false</RightLock><BottomLock>false</BottomLock></Anchors><AspectRatio>0</AspectRatio><CurbLeft>1</CurbLeft><CurbTop>1</CurbTop><CurbRight>1</CurbRight><CurbBottom>1</CurbBottom><ConstraintMinHeight>0</ConstraintMinHeight><ConstraintMinWidth>0</ConstraintMinWidth><ConstraintMaxHeight>0</ConstraintMaxHeight><ConstraintMaxWidth>0</ConstraintMaxWidth><DocAngle>0</DocAngle><DocLeft>75.1360015869141</DocLeft><DocTop>82.6592864990234</DocTop><DocHeight>31.1921539306641</DocHeight><DocWidth>46.4843063354492</DocWidth><Flipped>false</Flipped><Grouped>false</Grouped><Mirrored>false</Mirrored><Name/><Code1/><Code2/><Code3/><Code4/><Code5/><PreserveAspect>false</PreserveAspect><Tag>0</Tag><Visible>true</Visible><MasterAlpha>$FF</MasterAlpha><OutlineWidth>2</OutlineWidth><FillAlpha>255</FillAlpha><FillColor>$00000000</FillColor><OutlineColor>$000000FF</OutlineColor><UseFill>false</UseFill><UseOutline>true</UseOutline><UseStipple>false</UseStipple><StippleSize>2</StippleSize><IsClosed>false</IsClosed><StorePoints>false</StorePoints><SavePoints>false</SavePoints><Points><Point><X>0</X><Y>31.1921539306641</Y></Point><Point><X>4.56125640869141</X><Y>12.3651733398438</Y></Point><Point><X>22.7277603149414</X><Y>0</Y></Point><Point><X>40.1600875854492</X><Y>8.6746826171875</Y></Point><Point><X>46.4843063354492</X><Y>30.2245864868164</Y></Point></Points><LineWidth>0</LineWidth></shape>'",
    "left_post": null,
    "right_pos": null,
    "symbol_name": null,
    "teeth_docwidth": 55.5373497009,
    "teeth_docheight": 330.0,
    "relative_pos_x": 2.9046783447,
    "relative_pos_y": 72.659286499,
    "shape_width": 46.4843063354,
    "shape_height": 31.1921539307
  }
]
```
