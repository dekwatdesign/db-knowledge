# `labour_amniotic_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labour_amniotic_type_id | int(11) | NO | PRI | 0 |  |  |
| labour_amniotic_type_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_labour_amniotic_type_name | labour_amniotic_type_name | yes | 1 |
| PRIMARY | labour_amniotic_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "labour_amniotic_type_id": 1,
    "labour_amniotic_type_name": "ไม่เห็นน้ำ",
    "hos_guid": "{185D8ECA-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_amniotic_type_id": 2,
    "labour_amniotic_type_name": "Clear",
    "hos_guid": "{185D935D-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_amniotic_type_id": 3,
    "labour_amniotic_type_name": "Mild mec.",
    "hos_guid": "{185D96AB-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_amniotic_type_id": 4,
    "labour_amniotic_type_name": "Moderate mec.",
    "hos_guid": "{185D99E1-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_amniotic_type_id": 5,
    "labour_amniotic_type_name": "Thick",
    "hos_guid": "{185D9CF7-E5DA-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
