# `cancer_nursenote_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| check_id | int(11) | NO | PRI | 0 |  |  |
| nursenote_id | int(11) | YES |  | NULL |  |  |
| check_datetime | datetime | YES |  | NULL |  |  |
| Check_T | int(11) | YES |  | NULL |  |  |
| Check_P | int(11) | YES |  | NULL |  |  |
| Check_R | int(11) | YES |  | NULL |  |  |
| Check_BP | varchar(50) | YES |  | NULL |  |  |
| Check_O2Sat | int(11) | YES |  | NULL |  |  |
| Check_FeelLevel | int(11) | YES |  | NULL |  |  |
| Check_MTNE | int(11) | YES |  | NULL |  |  |
| Check_MTNERemark | text | YES |  | NULL |  |  |
| Check_MTNEText | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "check_id": 2,
    "nursenote_id": 1,
    "check_datetime": "2011-10-18 13:51:50",
    "Check_T": null,
    "Check_P": null,
    "Check_R": null,
    "Check_BP": null,
    "Check_O2Sat": null,
    "Check_FeelLevel": null,
    "Check_MTNE": null,
    "Check_MTNERemark": null,
    "Check_MTNEText": null,
    "hos_guid": null
  }
]
```
