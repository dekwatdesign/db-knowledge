# `ovst_oldvisit_rx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_oldvisit_rx_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| xml_data | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | yes | 1 |
| PRIMARY | ovst_oldvisit_rx_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ovst_oldvisit_rx_id": 1,
    "vn": "670327140026",
    "xml_data": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"vstdate\" fieldtype=\"date\"><PARAM Name=\"ORIGIN\" Value=\"opitemrece.vstdate\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"icode\" fieldtype=\"string\" WIDTH=\"7\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.icode\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"qty\" fieldtype=\"r8\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.qty\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_shortlist\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_shortlist\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_line1\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_line1\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_line2\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_line2\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_line3\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_line3\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS/></METADATA><ROWDATA><ROW vstdate=\"20240202\" icode=\"1000072\" qty=\"80\"/><ROW vstdate=\"20240202\" icode=\"1000091\" qty=\"20\"/><ROW vstdate=\"20240202\" icode=\"1000092\" qty=\"40\"/><ROW vstdate=\"20231215\" icode=\"1000091\" qty=\"20\"/><ROW vstdate=\"20231215\" icode=\"1000072\" qty=\"80\"/><ROW vstdate=\"20231215\" icode=\"1000092\" qty=\"50\"/><ROW vstdate=\"20231127\" icode=\"1000091\" qty=\"10\"/><ROW vstdate=\"20231127\" icode=\"1000072\" qty=\"30\"/><ROW vstdate=\"20231127\" icode=\"1000091\" qty=\"20\"/><ROW vstdate=\"20231106\" icode=\"1000091\" qty=\"10\"/><ROW vstdate=\"20231106\" icode=\"1000091\" qty=\"30\"/><ROW vstdate=\"20231106\" icode=\"1000072\" qty=\"30\"/><ROW vstdate=\"20231019\" icode=\"1600014\" qty=\"20\"/><ROW vstdate=\"20231019\" icode=\"1000072\" qty=\"10\"/></ROWDATA></DATAPACKET>"
  },
  {
    "ovst_oldvisit_rx_id": 2,
    "vn": "670327092030",
    "xml_data": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"vstdate\" fieldtype=\"date\"><PARAM Name=\"ORIGIN\" Value=\"opitemrece.vstdate\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"icode\" fieldtype=\"string\" WIDTH=\"7\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.icode\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"qty\" fieldtype=\"r8\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.qty\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_shortlist\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_shortlist\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_line1\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_line1\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_line2\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_line2\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_line3\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_line3\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS/></METADATA><ROWDATA><ROW vstdate=\"20240116\" icode=\"1000097\" qty=\"60\"/><ROW vstdate=\"20240116\" icode=\"1600016\" qty=\"2\"/><ROW vstdate=\"20231127\" icode=\"1000097\" qty=\"30\"/><ROW vstdate=\"20231127\" icode=\"1600016\" qty=\"1\"/><ROW vstdate=\"20230821\" icode=\"1610043\" qty=\"0\"/><ROW vstdate=\"20230224\" icode=\"1610043\" qty=\"1\"/><ROW vstdate=\"20221124\" icode=\"1610043\" qty=\"1\"/><ROW vstdate=\"20220704\" icode=\"1610043\" qty=\"1\"/><ROW vstdate=\"20220307\" icode=\"1610043\" qty=\"1\"/><ROW vstdate=\"20211214\" icode=\"1610043\" qty=\"1\"/><ROW vstdate=\"20210722\" icode=\"1610043\" qty=\"1\"/><ROW vstdate=\"20210614\" icode=\"1610043\" qty=\"0\"/><ROW vstdate=\"20210222\" icode=\"1610043\" qty=\"1\"/><ROW vstdate=\"20201222\" icode=\"1610043\" qty=\"1\"/><ROW vstdate=\"20200717\" icode=\"1610043\" qty=\"1\"/><ROW vstdate=\"20200330\" icode=\"1610043\" qty=\"1\"/><ROW vstdate=\"20190909\" icode=\"1610043\" qty=\"1\"/><ROW vstdate=\"20190418\" icode=\"1610043\" qty=\"0\"/><ROW vstdate=\"20190225\" icode=\"1610043\" qty=\"1\"/></ROWDATA></DATAPACKET>"
  },
  {
    "ovst_oldvisit_rx_id": 3,
    "vn": "670104113008",
    "xml_data": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"vstdate\" fieldtype=\"date\"><PARAM Name=\"ORIGIN\" Value=\"opitemrece.vstdate\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"icode\" fieldtype=\"string\" WIDTH=\"7\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.icode\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"qty\" fieldtype=\"r8\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.qty\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_shortlist\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_shortlist\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_line1\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_line1\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_line2\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_line2\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"usage_line3\" fieldtype=\"string\" WIDTH=\"150\"><PARAM Name=\"ORIGIN\" Value=\"opi_dispense.usage_line3\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS/></METADATA><ROWDATA><ROW vstdate=\"20231227\" icode=\"1000097\" qty=\"0\"/><ROW vstdate=\"20231227\" icode=\"1000143\" qty=\"0\"/><ROW vstdate=\"20231129\" icode=\"1000143\" qty=\"8\"/><ROW vstdate=\"20231129\" icode=\"1000097\" qty=\"30\"/><ROW vstdate=\"20231024\" icode=\"1000143\" qty=\"0\"/><ROW vstdate=\"20231024\" icode=\"1000097\" qty=\"0\"/><ROW vstdate=\"20230811\" icode=\"1000097\" qty=\"40\"/><ROW vstdate=\"20230811\" icode=\"1000143\" qty=\"15\"/><ROW vstdate=\"20221207\" icode=\"1640022\" qty=\"1\"/><ROW vstdate=\"20220704\" icode=\"1600016\" qty=\"1\"/><ROW vstdate=\"20220422\" icode=\"1600016\" qty=\"1\"/><ROW vstdate=\"20211208\" icode=\"1600016\" qty=\"1\"/><ROW vstdate=\"20211015\" icode=\"1600016\" qty=\"1\"/><ROW vstdate=\"20210803\" icode=\"1600016\" qty=\"1\"/><ROW vstdate=\"20210421\" icode=\"1600016\" qty=\"1\"/><ROW vstdate=\"20210305\" icode=\"1600016\" qty=\"0\"/><ROW vstdate=\"20200903\" icode=\"1600016\" qty=\"1\"/></ROWDATA></DATAPACKET>"
  }
]
```
