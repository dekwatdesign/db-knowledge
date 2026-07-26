# `vaccine_manufacturer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vaccine_manufacturer_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_manufacturer_name | varchar(200) | YES | UNI | NULL |  |  |
| vaccine_code | varchar(10) | YES |  | NULL |  |  |
| vaccine_name | varchar(30) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vaccine_manufacturer_name | vaccine_manufacturer_name | yes | 1 |
| PRIMARY | vaccine_manufacturer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vaccine_manufacturer_id": 1,
    "vaccine_manufacturer_name": "AstraZeneca",
    "vaccine_code": null,
    "vaccine_name": null
  },
  {
    "vaccine_manufacturer_id": 2,
    "vaccine_manufacturer_name": "Novavax",
    "vaccine_code": null,
    "vaccine_name": null
  },
  {
    "vaccine_manufacturer_id": 3,
    "vaccine_manufacturer_name": "Johnson & Johnson",
    "vaccine_code": null,
    "vaccine_name": null
  },
  {
    "vaccine_manufacturer_id": 4,
    "vaccine_manufacturer_name": "Sanofi, GlaxoSmithKline",
    "vaccine_code": null,
    "vaccine_name": null
  },
  {
    "vaccine_manufacturer_id": 5,
    "vaccine_manufacturer_name": "Moderna",
    "vaccine_code": null,
    "vaccine_name": null
  },
  {
    "vaccine_manufacturer_id": 6,
    "vaccine_manufacturer_name": "Pfizer, BioNTech",
    "vaccine_code": null,
    "vaccine_name": null
  },
  {
    "vaccine_manufacturer_id": 7,
    "vaccine_manufacturer_name": "Sinovac Life Sciences",
    "vaccine_code": null,
    "vaccine_name": null
  },
  {
    "vaccine_manufacturer_id": 8,
    "vaccine_manufacturer_name": "Sinopharm",
    "vaccine_code": null,
    "vaccine_name": null
  }
]
```
