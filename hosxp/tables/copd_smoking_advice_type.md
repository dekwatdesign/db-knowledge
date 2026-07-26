# `copd_smoking_advice_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| copd_smoking_advice_type_id | int(11) | NO | PRI | 0 |  |  |
| copd_smoking_advice_type_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_copd_smoking_advice_type_name | copd_smoking_advice_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | copd_smoking_advice_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "copd_smoking_advice_type_id": 1,
    "copd_smoking_advice_type_name": "1 Ask",
    "hos_guid": null
  },
  {
    "copd_smoking_advice_type_id": 2,
    "copd_smoking_advice_type_name": "2 Ask + Advice",
    "hos_guid": null
  },
  {
    "copd_smoking_advice_type_id": 3,
    "copd_smoking_advice_type_name": "3 Ask + Advice + Assessment",
    "hos_guid": null
  },
  {
    "copd_smoking_advice_type_id": 4,
    "copd_smoking_advice_type_name": "4 Ask + Advice + Assessment + Assist",
    "hos_guid": null
  },
  {
    "copd_smoking_advice_type_id": 5,
    "copd_smoking_advice_type_name": "5 Ask + Advice + Assessment + Assist + Arrange",
    "hos_guid": null
  },
  {
    "copd_smoking_advice_type_id": 9,
    "copd_smoking_advice_type_name": "ไม่ได้ให้บริการ",
    "hos_guid": null
  }
]
```
