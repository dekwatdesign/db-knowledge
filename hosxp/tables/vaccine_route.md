# `vaccine_route`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vaccine_route_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_route_name | varchar(200) | YES | UNI | NULL |  |  |
| export_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vaccine_route_name | vaccine_route_name | yes | 1 |
| PRIMARY | vaccine_route_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "vaccine_route_id": 1,
    "vaccine_route_name": "ฉีดเข้ากล้ามเนื้อ (Intramuscular)",
    "export_code": "IM"
  },
  {
    "vaccine_route_id": 2,
    "vaccine_route_name": "ฉีดใต้ผิวหนัง (Subcutaneous)",
    "export_code": null
  },
  {
    "vaccine_route_id": 3,
    "vaccine_route_name": "รับประทาน (Oral)",
    "export_code": null
  },
  {
    "vaccine_route_id": 4,
    "vaccine_route_name": "ทางจมูก (Intranasal)",
    "export_code": null
  },
  {
    "vaccine_route_id": 5,
    "vaccine_route_name": "ฉีดภายในผิวหนัง (Intradermal)",
    "export_code": null
  }
]
```
