# `visit_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| pttype1_guid | varchar(38) | YES |  | NULL |  |  |
| pttype2_guid | varchar(38) | YES |  | NULL |  |  |
| doctor_fee_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "541214163000",
    "pttype1_guid": "{E5D96BB8-F309-4E46-93C6-8EEAF6A1AD30}",
    "pttype2_guid": null,
    "doctor_fee_guid": "{384D0DAE-3811-4F48-8277-8ED649F4BDA3}",
    "hos_guid": null
  },
  {
    "vn": "541214163002",
    "pttype1_guid": "{5C6A5EF9-ACEF-4229-B86E-401C1B80F44C}",
    "pttype2_guid": null,
    "doctor_fee_guid": "{EA3AD314-8133-4904-8CA0-604ED09BA95B}",
    "hos_guid": null
  },
  {
    "vn": "541214163004",
    "pttype1_guid": "{16155AC2-10BC-40D1-AD12-CB2BBAE71C45}",
    "pttype2_guid": null,
    "doctor_fee_guid": "{308DB0AF-8276-4E82-B6D8-CEF355E55430}",
    "hos_guid": null
  },
  {
    "vn": "541214163006",
    "pttype1_guid": "{3BAAC872-FCE2-484A-89C3-F5FE756F102C}",
    "pttype2_guid": null,
    "doctor_fee_guid": "{B7BFF3D8-489B-4AE5-AE82-9EF0597FA816}",
    "hos_guid": null
  },
  {
    "vn": "541214163008",
    "pttype1_guid": "{6ABB8DE0-2A8E-4CBA-8EAB-032C0865DEC1}",
    "pttype2_guid": null,
    "doctor_fee_guid": "{5FDD9D49-6F1E-40E4-861F-3D5F33FF50A5}",
    "hos_guid": null
  },
  {
    "vn": "541214163010",
    "pttype1_guid": "{3F928E2F-84AD-46B1-8438-81F5086327B7}",
    "pttype2_guid": null,
    "doctor_fee_guid": "{AAA4D4D0-656D-444A-A74A-E4526F11DD8D}",
    "hos_guid": null
  },
  {
    "vn": "541214163012",
    "pttype1_guid": "{2257F0DD-B9A6-4A21-8D90-195314014D1A}",
    "pttype2_guid": null,
    "doctor_fee_guid": "{A19DECF3-4284-4C23-94C3-522C6C95148C}",
    "hos_guid": null
  },
  {
    "vn": "541214171500",
    "pttype1_guid": "{4FD9BAFB-5E48-4C4D-A02B-844861FE0F33}",
    "pttype2_guid": null,
    "doctor_fee_guid": "{738446BB-BD98-4C0B-8A85-AF394CDF0593}",
    "hos_guid": null
  }
]
```
