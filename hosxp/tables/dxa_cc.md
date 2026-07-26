# `dxa_cc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_cc_id | int(11) | YES |  | NULL |  |  |
| dxa_cc_name | varchar(250) | YES | UNI | NULL |  |  |
| dxa_bodyregion_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_unique | dxa_cc_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dxa_cc_id": 77,
    "dxa_cc_name": "กดเจ็บบริเวณชายโครงขวา",
    "dxa_bodyregion_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_cc_id": 53,
    "dxa_cc_name": "กระหายน้ำบ่อย",
    "dxa_bodyregion_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_cc_id": 59,
    "dxa_cc_name": "กลุ้มใจ",
    "dxa_bodyregion_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_cc_id": 89,
    "dxa_cc_name": "ก้อนที่ขาหนีบ",
    "dxa_bodyregion_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_cc_id": 82,
    "dxa_cc_name": "ก้อนที่เต้านม",
    "dxa_bodyregion_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_cc_id": 93,
    "dxa_cc_name": "ก้อนที่ใต้ผิวหนัง",
    "dxa_bodyregion_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_cc_id": 90,
    "dxa_cc_name": "ก้อนนุ่มไม่ปวด",
    "dxa_bodyregion_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_cc_id": 57,
    "dxa_cc_name": "กังวลใจ",
    "dxa_bodyregion_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
