# `vital_sign_age`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vital_sign_age_id | int(11) | NO | PRI | 0 |  |  |
| vital_sign_id | int(11) | YES | MUL | NULL |  |  |
| min_age_month | int(11) | YES | MUL | NULL |  |  |
| max_age_month | int(11) | YES | MUL | NULL |  |  |
| alert_min_value | double(15,3) | YES |  | NULL |  |  |
| alert_max_value | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_age_min_max | max_age_month | no | 1 |
| ix_age_min_max | min_age_month | no | 2 |
| ix_age_min_max_index | min_age_month | no | 1 |
| ix_age_min_max_index | max_age_month | no | 2 |
| ix_vital_sign_id | vital_sign_id | no | 1 |
| PRIMARY | vital_sign_age_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vital_sign_age_id": 1,
    "vital_sign_id": 4,
    "min_age_month": 0,
    "max_age_month": 1,
    "alert_min_value": 60.0,
    "alert_max_value": 99.0
  },
  {
    "vital_sign_age_id": 2,
    "vital_sign_id": 4,
    "min_age_month": 1,
    "max_age_month": 12,
    "alert_min_value": 70.0,
    "alert_max_value": 109.0
  },
  {
    "vital_sign_age_id": 3,
    "vital_sign_id": 4,
    "min_age_month": 12,
    "max_age_month": 60,
    "alert_min_value": 80.0,
    "alert_max_value": 119.0
  },
  {
    "vital_sign_age_id": 4,
    "vital_sign_id": 4,
    "min_age_month": 60,
    "max_age_month": 120,
    "alert_min_value": 80.0,
    "alert_max_value": 129.0
  },
  {
    "vital_sign_age_id": 5,
    "vital_sign_id": 4,
    "min_age_month": 120,
    "max_age_month": 99999,
    "alert_min_value": 90.0,
    "alert_max_value": 134.0
  },
  {
    "vital_sign_age_id": 6,
    "vital_sign_id": 2,
    "min_age_month": 12,
    "max_age_month": 60,
    "alert_min_value": 20.0,
    "alert_max_value": 999999999.0
  },
  {
    "vital_sign_age_id": 7,
    "vital_sign_id": 2,
    "min_age_month": 60,
    "max_age_month": 120,
    "alert_min_value": 20.0,
    "alert_max_value": 999999999.0
  },
  {
    "vital_sign_age_id": 8,
    "vital_sign_id": 2,
    "min_age_month": 120,
    "max_age_month": 99999,
    "alert_min_value": 20.0,
    "alert_max_value": 999999999.0
  }
]
```
