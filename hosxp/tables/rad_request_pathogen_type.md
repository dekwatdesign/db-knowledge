# `rad_request_pathogen_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rad_request_pathogen_type_id | int(11) | NO | PRI | 0 |  |  |
| rad_request_pathogen_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rad_request_pathogen_type_name | rad_request_pathogen_type_name | yes | 1 |
| PRIMARY | rad_request_pathogen_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "rad_request_pathogen_type_id": 1,
    "rad_request_pathogen_type_name": "ยังไม่ทราบ"
  },
  {
    "rad_request_pathogen_type_id": 2,
    "rad_request_pathogen_type_name": "P.aeruginosa"
  },
  {
    "rad_request_pathogen_type_id": 3,
    "rad_request_pathogen_type_name": "A.baumannii"
  },
  {
    "rad_request_pathogen_type_id": 4,
    "rad_request_pathogen_type_name": "E.coli ESBL +ve"
  },
  {
    "rad_request_pathogen_type_id": 5,
    "rad_request_pathogen_type_name": "K.pneumonia +ve"
  },
  {
    "rad_request_pathogen_type_id": 6,
    "rad_request_pathogen_type_name": "อื่นๆ"
  }
]
```
