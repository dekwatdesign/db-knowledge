# `opitemrece_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| charge_guid | varchar(38) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| charge_money | double(15,3) | YES |  | NULL |  |  |
| source_unitprice | double(15,3) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| charge_guid | charge_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hos_guid | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hos_guid": "{00044A31-9C22-4BBE-AA66-A7E16D6E814D}",
    "pttype": null,
    "icode": "3000458",
    "charge_guid": "{A08D6722-B8DD-4B5E-9F63-4C3964E3886C}",
    "vn": "690311071727",
    "charge_money": 20.0,
    "source_unitprice": 60.0,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00171FF4-DD6B-447F-88A4-EA368938CCA0}",
    "pttype": null,
    "icode": "3000102",
    "charge_guid": "{F939A583-F531-496C-91B3-632A50FDC773}",
    "vn": "670000368",
    "charge_money": 10.0,
    "source_unitprice": 60.0,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{001BA57F-EAAD-4449-9971-82959A09CAF0}",
    "pttype": null,
    "icode": "3000035",
    "charge_guid": "{FACBD5AF-895A-4B04-96C3-C8A3C29AA29C}",
    "vn": "560211111043",
    "charge_money": 200.0,
    "source_unitprice": 200.0,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{001E88B2-AFDD-470D-AADF-131B1E0EEE6E}",
    "pttype": null,
    "icode": "3000455",
    "charge_guid": "{0B5CEB56-6FF7-433E-B56F-0B9E1422D5D7}",
    "vn": "680620090006",
    "charge_money": 20.0,
    "source_unitprice": 60.0,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{001F9BEC-B8E9-4C63-ABAD-C7555990417F}",
    "pttype": null,
    "icode": "3000505",
    "charge_guid": "{5B77F300-4471-47EA-B5A2-1CE1E5FA1765}",
    "vn": "660120060033",
    "charge_money": 40.0,
    "source_unitprice": 130.0,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00270553-B146-418A-B0F0-DED8CF6F8C17}",
    "pttype": null,
    "icode": "3000334",
    "charge_guid": "{B79294B4-8C06-4FE8-A6E0-968F263D17E8}",
    "vn": "560814075419",
    "charge_money": 20.0,
    "source_unitprice": 120.0,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{004D020A-39AE-4097-923F-E9056F1E40D4}",
    "pttype": null,
    "icode": "3000456",
    "charge_guid": "{380F9AD0-643D-4E39-8AA0-3C7843E67E6C}",
    "vn": "680428060030",
    "charge_money": 20.0,
    "source_unitprice": 60.0,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{0054DE1C-B82C-4B3E-8461-26CBF6595442}",
    "pttype": null,
    "icode": "3000106",
    "charge_guid": "{CC9FF1AD-C894-426D-AC62-960A5E6A76B5}",
    "vn": "670000001",
    "charge_money": 10.0,
    "source_unitprice": 60.0,
    "hos_guid_ext": null
  }
]
```
