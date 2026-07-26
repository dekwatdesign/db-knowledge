# `thalassaemia_risk_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| thalassaemia_risk_type_id | int(11) | NO | PRI | 0 |  |  |
| thalassaemia_risk_type_name | varchar(150) | YES | UNI | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_thalassaemia_risk_type_name | thalassaemia_risk_type_name | yes | 1 |
| PRIMARY | thalassaemia_risk_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "thalassaemia_risk_type_id": 1,
    "thalassaemia_risk_type_name": "Alpha Thalassaemia 1",
    "sex": "1",
    "hos_guid": null
  },
  {
    "thalassaemia_risk_type_id": 2,
    "thalassaemia_risk_type_name": "Beta Thalassaemia trait",
    "sex": "1",
    "hos_guid": null
  },
  {
    "thalassaemia_risk_type_id": 3,
    "thalassaemia_risk_type_name": "Hb E trait หรือ Hb EE",
    "sex": "1",
    "hos_guid": null
  },
  {
    "thalassaemia_risk_type_id": 4,
    "thalassaemia_risk_type_name": "Hb CS",
    "sex": "1",
    "hos_guid": null
  },
  {
    "thalassaemia_risk_type_id": 5,
    "thalassaemia_risk_type_name": "Homozygous Beta-Thal major",
    "sex": "2",
    "hos_guid": null
  },
  {
    "thalassaemia_risk_type_id": 6,
    "thalassaemia_risk_type_name": "Beta-Thal/Hb-E",
    "sex": "2",
    "hos_guid": null
  }
]
```
