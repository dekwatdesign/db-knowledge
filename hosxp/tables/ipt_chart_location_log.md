# `ipt_chart_location_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_cll_id | int(11) | NO | PRI | 0 |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| log_datetime | datetime | YES |  | NULL |  |  |
| hospital_location_id | int(11) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | ipt_cll_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_cll_id": 17382,
    "staff": "[MASKED_FULLNAME]",
    "log_datetime": "2022-12-09 09:35:57",
    "hospital_location_id": 98,
    "an": "650002221",
    "depcode": null
  },
  {
    "ipt_cll_id": 17383,
    "staff": "[MASKED_FULLNAME]",
    "log_datetime": "2022-12-09 10:18:08",
    "hospital_location_id": 98,
    "an": "650002222",
    "depcode": null
  },
  {
    "ipt_cll_id": 17384,
    "staff": "[MASKED_FULLNAME]",
    "log_datetime": "2022-12-09 10:43:39",
    "hospital_location_id": 98,
    "an": "650002223",
    "depcode": null
  },
  {
    "ipt_cll_id": 17385,
    "staff": "[MASKED_FULLNAME]",
    "log_datetime": "2022-12-09 10:59:44",
    "hospital_location_id": 98,
    "an": "650002224",
    "depcode": null
  },
  {
    "ipt_cll_id": 17386,
    "staff": "[MASKED_FULLNAME]",
    "log_datetime": "2022-12-09 11:04:26",
    "hospital_location_id": 98,
    "an": "650002225",
    "depcode": null
  },
  {
    "ipt_cll_id": 17387,
    "staff": "[MASKED_FULLNAME]",
    "log_datetime": "2022-12-09 11:06:44",
    "hospital_location_id": 98,
    "an": "650002226",
    "depcode": null
  },
  {
    "ipt_cll_id": 17388,
    "staff": "[MASKED_FULLNAME]",
    "log_datetime": "2022-12-09 11:07:44",
    "hospital_location_id": 98,
    "an": "650002227",
    "depcode": null
  },
  {
    "ipt_cll_id": 17389,
    "staff": "[MASKED_FULLNAME]",
    "log_datetime": "2022-12-13 09:11:06",
    "hospital_location_id": 98,
    "an": "650002228",
    "depcode": null
  }
]
```
