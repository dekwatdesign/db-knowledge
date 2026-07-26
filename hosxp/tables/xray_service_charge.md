# `xray_service_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_service_charge_id | int(11) | NO | PRI | 0 |  |  |
| xn | int(11) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_opi_guid | opi_guid | yes | 1 |
| PRIMARY | xray_service_charge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "xray_service_charge_id": 1,
    "xn": 7,
    "opi_guid": "{8743BDB9-6FBE-4B6F-9416-53B0AD1A6F68}",
    "icode": "3080018",
    "qty": 1,
    "price": 340.0,
    "hos_guid": "{BF600798-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_service_charge_id": 2,
    "xn": 8,
    "opi_guid": "{37BE9F68-E823-4619-924B-68427EF13E64}",
    "icode": "3080019",
    "qty": 1,
    "price": 170.0,
    "hos_guid": "{BF6009FA-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_service_charge_id": 3,
    "xn": 9,
    "opi_guid": "{0AB5B6C7-C788-4C8C-80FF-693EC94CCCFD}",
    "icode": "3080127",
    "qty": 1,
    "price": 170.0,
    "hos_guid": "{BF600B44-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_service_charge_id": 4,
    "xn": 10,
    "opi_guid": "{257CB2F6-D75A-4CA9-8A8A-4C7DFEE18D3A}",
    "icode": "3080064",
    "qty": 1,
    "price": 170.0,
    "hos_guid": "{BF600C84-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_service_charge_id": 5,
    "xn": 11,
    "opi_guid": "{FBC45D8E-524A-48B0-B501-CA7CC4D5316E}",
    "icode": "3080142",
    "qty": 1,
    "price": 0.0,
    "hos_guid": "{BF600DB0-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_service_charge_id": 6,
    "xn": 12,
    "opi_guid": "{4EBE2811-C08C-4A38-A3E9-5B90A7FE60AB}",
    "icode": "3080127",
    "qty": 1,
    "price": 0.0,
    "hos_guid": "{BF600EE6-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_service_charge_id": 7,
    "xn": 13,
    "opi_guid": "{605C8136-00D2-4510-921A-DF898293F7F1}",
    "icode": "3080127",
    "qty": 1,
    "price": 0.0,
    "hos_guid": "{BF60101C-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_service_charge_id": 8,
    "xn": 14,
    "opi_guid": "{BCA445E8-2EAC-44DD-B969-29BD2ADAA21F}",
    "icode": "3080020",
    "qty": 1,
    "price": 170.0,
    "hos_guid": "{BF601152-F61E-11DE-BFF4-00215E472B30}"
  }
]
```
