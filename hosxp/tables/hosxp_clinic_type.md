# `hosxp_clinic_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hosxp_clinic_type_id | int(11) | NO | PRI | 0 |  |  |
| hosxp_clinic_type_name | varchar(200) | YES | UNI | NULL |  |  |
| moph_ncd_code | varchar(5) | YES |  | NULL |  |  |
| is_ncd | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hosxp_clinic_type_name | hosxp_clinic_type_name | yes | 1 |
| PRIMARY | hosxp_clinic_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hosxp_clinic_type_id": 1,
    "hosxp_clinic_type_name": "โรคเบาหวาน",
    "moph_ncd_code": "001",
    "is_ncd": "Y"
  },
  {
    "hosxp_clinic_type_id": 2,
    "hosxp_clinic_type_name": "โรคความดันโลหิตสูง",
    "moph_ncd_code": "002",
    "is_ncd": "Y"
  },
  {
    "hosxp_clinic_type_id": 3,
    "hosxp_clinic_type_name": "โรคถุงลมโป่งพอง",
    "moph_ncd_code": "008",
    "is_ncd": "Y"
  },
  {
    "hosxp_clinic_type_id": 4,
    "hosxp_clinic_type_name": "โรคหืดหอบ",
    "moph_ncd_code": null,
    "is_ncd": null
  },
  {
    "hosxp_clinic_type_id": 5,
    "hosxp_clinic_type_name": "โรควัณโรค",
    "moph_ncd_code": null,
    "is_ncd": null
  },
  {
    "hosxp_clinic_type_id": 6,
    "hosxp_clinic_type_name": "โรคไต",
    "moph_ncd_code": "009",
    "is_ncd": "Y"
  },
  {
    "hosxp_clinic_type_id": 7,
    "hosxp_clinic_type_name": "โรคมะเร็ง",
    "moph_ncd_code": "006",
    "is_ncd": "Y"
  },
  {
    "hosxp_clinic_type_id": 8,
    "hosxp_clinic_type_name": "โรคจิตเวช",
    "moph_ncd_code": null,
    "is_ncd": null
  }
]
```
