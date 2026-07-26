# `person_ncd_summary_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_ncd_summary_code | char(1) | NO | PRI |  |  |  |
| person_ncd_summary_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_person_ncd_summary_name | person_ncd_summary_name | yes | 1 |
| PRIMARY | person_ncd_summary_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "person_ncd_summary_code": "A",
    "person_ncd_summary_name": "ปกติ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "person_ncd_summary_code": "B",
    "person_ncd_summary_name": "เสี่ยง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "person_ncd_summary_code": "C",
    "person_ncd_summary_name": "เบาหวาน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "person_ncd_summary_code": "D",
    "person_ncd_summary_name": "ความดันโลหิตสูง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "person_ncd_summary_code": "E",
    "person_ncd_summary_name": "STROKE",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
