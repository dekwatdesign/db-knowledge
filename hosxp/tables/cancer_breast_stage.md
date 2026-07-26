# `cancer_breast_stage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_breast_stage_id | int(11) | NO | PRI | 0 |  |  |
| group_stage_name | varchar(20) | YES |  | NULL |  |  |
| t_value | varchar(5) | YES |  | NULL |  |  |
| n_value | varchar(5) | YES |  | NULL |  |  |
| m_value | varchar(5) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_breast_stage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_breast_stage_id": 1,
    "group_stage_name": "0",
    "t_value": "is",
    "n_value": "0",
    "m_value": "0",
    "hos_guid": null
  },
  {
    "cancer_breast_stage_id": 2,
    "group_stage_name": "IA",
    "t_value": "1",
    "n_value": "0",
    "m_value": "0",
    "hos_guid": null
  },
  {
    "cancer_breast_stage_id": 3,
    "group_stage_name": "IB",
    "t_value": "0",
    "n_value": "1",
    "m_value": "0",
    "hos_guid": null
  },
  {
    "cancer_breast_stage_id": 4,
    "group_stage_name": "IB",
    "t_value": "1",
    "n_value": "1",
    "m_value": "0",
    "hos_guid": null
  },
  {
    "cancer_breast_stage_id": 5,
    "group_stage_name": "IIA",
    "t_value": "0",
    "n_value": "11",
    "m_value": "0",
    "hos_guid": null
  },
  {
    "cancer_breast_stage_id": 6,
    "group_stage_name": "IIA",
    "t_value": "1",
    "n_value": "12",
    "m_value": "0",
    "hos_guid": null
  },
  {
    "cancer_breast_stage_id": 7,
    "group_stage_name": "IIA",
    "t_value": "2",
    "n_value": "0",
    "m_value": "0",
    "hos_guid": null
  },
  {
    "cancer_breast_stage_id": 8,
    "group_stage_name": "IIB",
    "t_value": "2",
    "n_value": "1",
    "m_value": "0",
    "hos_guid": null
  }
]
```
