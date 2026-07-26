# `women_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| women_vaccine_id | int(11) | NO | PRI | 0 |  |  |
| women_vaccine_name | varchar(150) | YES | UNI | NULL |  |  |
| vaccine_code | varchar(10) | YES | UNI | NULL |  |  |
| export_vaccine_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vaccine_code | vaccine_code | yes | 1 |
| ix_women_vaccine_name | women_vaccine_name | yes | 1 |
| PRIMARY | women_vaccine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "women_vaccine_id": 1,
    "women_vaccine_name": "วัคซีนบาดทะยัก เข็มที่ 1",
    "vaccine_code": "TT1",
    "export_vaccine_code": null,
    "hos_guid": null
  },
  {
    "women_vaccine_id": 2,
    "women_vaccine_name": "วัคซีนบาดทะยัก เข็มที่ 2",
    "vaccine_code": "TT2",
    "export_vaccine_code": null,
    "hos_guid": null
  },
  {
    "women_vaccine_id": 3,
    "women_vaccine_name": "วัคซีนบาดทะยัก เข็มที่ 3",
    "vaccine_code": "TT3",
    "export_vaccine_code": null,
    "hos_guid": null
  },
  {
    "women_vaccine_id": 4,
    "women_vaccine_name": "วัคซีนบาดทะยัก เข็มที่ 4",
    "vaccine_code": "TT4",
    "export_vaccine_code": null,
    "hos_guid": null
  },
  {
    "women_vaccine_id": 5,
    "women_vaccine_name": "วัคซีนบาดทะยัก เข็มที่ 5",
    "vaccine_code": "TT5",
    "export_vaccine_code": null,
    "hos_guid": null
  }
]
```
