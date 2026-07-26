# `health_med_institute_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_institute_type_id | int(11) | NO | PRI | 0 |  |  |
| health_med_institute_type_name | varchar(150) | YES | UNI | NULL |  |  |
| health_med_institute_type_code | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_institute_type_name | health_med_institute_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_institute_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "health_med_institute_type_id": 1,
    "health_med_institute_type_name": "กรมพัฒนาการแพทย์แผนไทยและการแพทย์ทางเลือก",
    "health_med_institute_type_code": "01",
    "hos_guid": null
  },
  {
    "health_med_institute_type_id": 2,
    "health_med_institute_type_name": "สถาบันการแพทย์แผนไทย",
    "health_med_institute_type_code": "02",
    "hos_guid": null
  },
  {
    "health_med_institute_type_id": 3,
    "health_med_institute_type_name": "มหาวิทยาลัยของรัฐ",
    "health_med_institute_type_code": "03",
    "hos_guid": null
  },
  {
    "health_med_institute_type_id": 4,
    "health_med_institute_type_name": "มหาวิทยาลัยเอกชน",
    "health_med_institute_type_code": "04",
    "hos_guid": null
  },
  {
    "health_med_institute_type_id": 5,
    "health_med_institute_type_name": "มหาวิทยาลัยราชภัฏ",
    "health_med_institute_type_code": "05",
    "hos_guid": null
  },
  {
    "health_med_institute_type_id": 6,
    "health_med_institute_type_name": "มหาวิทยาลัยเทคโนโลยีราชมงคล",
    "health_med_institute_type_code": "06",
    "hos_guid": null
  },
  {
    "health_med_institute_type_id": 7,
    "health_med_institute_type_name": "วิทยาลัยการสาธารณสุขสิริธร(วสส.)",
    "health_med_institute_type_code": "07",
    "hos_guid": null
  },
  {
    "health_med_institute_type_id": 8,
    "health_med_institute_type_name": "วิทยาลัยพยาบาล",
    "health_med_institute_type_code": "08",
    "hos_guid": null
  }
]
```
