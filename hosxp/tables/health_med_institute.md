# `health_med_institute`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_institute_id | int(11) | NO | PRI | 0 |  |  |
| health_med_institute_name | varchar(200) | YES | UNI | NULL |  |  |
| health_med_institute_code | varchar(50) | YES |  | NULL |  |  |
| health_med_institute_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_institute_name | health_med_institute_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_institute_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "health_med_institute_id": 1,
    "health_med_institute_name": "จุฬาลงกรณ์มหาวิทยาลัย",
    "health_med_institute_code": "0001",
    "health_med_institute_type_id": 3,
    "hos_guid": null
  },
  {
    "health_med_institute_id": 2,
    "health_med_institute_name": "มหาวิทยาลัยมหิดล",
    "health_med_institute_code": "0002",
    "health_med_institute_type_id": 3,
    "hos_guid": null
  },
  {
    "health_med_institute_id": 3,
    "health_med_institute_name": "มหาวิทยาลัยธรรมศาสตร์",
    "health_med_institute_code": "0003",
    "health_med_institute_type_id": 3,
    "hos_guid": null
  },
  {
    "health_med_institute_id": 4,
    "health_med_institute_name": "มหาวิทยาลัยขอนแก่น",
    "health_med_institute_code": "0004",
    "health_med_institute_type_id": 3,
    "hos_guid": null
  },
  {
    "health_med_institute_id": 5,
    "health_med_institute_name": "มหาวิทยาลัยเชียงใหม่",
    "health_med_institute_code": "0005",
    "health_med_institute_type_id": 3,
    "hos_guid": null
  },
  {
    "health_med_institute_id": 6,
    "health_med_institute_name": "มหาวิทยาลัยสงขลานครินทร์",
    "health_med_institute_code": "0006",
    "health_med_institute_type_id": 3,
    "hos_guid": null
  },
  {
    "health_med_institute_id": 7,
    "health_med_institute_name": "มหาวิทยาลัยมหาสารคาม",
    "health_med_institute_code": "0007",
    "health_med_institute_type_id": 3,
    "hos_guid": null
  },
  {
    "health_med_institute_id": 8,
    "health_med_institute_name": "มหาวิทยาลัยนเรศวร",
    "health_med_institute_code": "0008",
    "health_med_institute_type_id": 3,
    "hos_guid": null
  }
]
```
