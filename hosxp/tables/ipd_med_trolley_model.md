# `ipd_med_trolley_model`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_med_trolley_model_id | int(11) | NO | PRI | 0 |  |  |
| ipd_med_trolley_model_name | varchar(200) | YES | UNI | NULL |  |  |
| slot_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_med_trolley_model_name | ipd_med_trolley_model_name | yes | 1 |
| PRIMARY | ipd_med_trolley_model_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "ipd_med_trolley_model_id": 1,
    "ipd_med_trolley_model_name": "Amarin Mini Trolley MQ/18",
    "slot_count": 12
  }
]
```
