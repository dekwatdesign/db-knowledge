# `oapp_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(150) | NO | PRI |  |  |  |
| order_number | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "name": "CBC",
    "order_number": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "Drug Level",
    "order_number": 6,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "Glcose",
    "order_number": 2,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "Lipid Profile",
    "order_number": 4,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "Liver Function test",
    "order_number": 3,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "Renal Function test",
    "order_number": 5,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "กลับมาพบแพทย์ รพ.ยุวประสาทฯ",
    "order_number": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
