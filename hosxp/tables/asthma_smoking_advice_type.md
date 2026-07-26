# `asthma_smoking_advice_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| asthma_smoking_advice_type_id | int(11) | NO | PRI | 0 |  |  |
| asthma_smoking_advice_type_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_asthma_smoking_advice_type_name | asthma_smoking_advice_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | asthma_smoking_advice_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "asthma_smoking_advice_type_id": 1,
    "asthma_smoking_advice_type_name": "1 Ask",
    "hos_guid": null
  },
  {
    "asthma_smoking_advice_type_id": 2,
    "asthma_smoking_advice_type_name": "2 Ask + Advice",
    "hos_guid": null
  },
  {
    "asthma_smoking_advice_type_id": 3,
    "asthma_smoking_advice_type_name": "3 Ask + Advice + Assessment",
    "hos_guid": null
  },
  {
    "asthma_smoking_advice_type_id": 4,
    "asthma_smoking_advice_type_name": "4 Ask + Advice + Assessment + Assist",
    "hos_guid": null
  },
  {
    "asthma_smoking_advice_type_id": 5,
    "asthma_smoking_advice_type_name": "5 Ask + Advice + Assessment + Assist + Arrange",
    "hos_guid": null
  },
  {
    "asthma_smoking_advice_type_id": 9,
    "asthma_smoking_advice_type_name": "ไม่ได้ให้บริการ",
    "hos_guid": null
  }
]
```
