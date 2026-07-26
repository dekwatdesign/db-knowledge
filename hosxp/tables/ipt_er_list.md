# `ipt_er_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_er_list_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| ward | varchar(6) | YES |  | NULL |  |  |
| send_datetime | datetime | YES |  | NULL |  |  |
| send_staff | varchar(25) | YES |  | NULL |  |  |
| receive_staff | varchar(50) | YES |  | NULL |  |  |
| receive_datetime | datetime | YES |  | NULL |  |  |
| er_oper_status_id | int(11) | YES |  | NULL |  |  |
| oper_list | varchar(250) | YES |  | NULL |  |  |
| er_period | int(11) | YES |  | NULL |  |  |
| er_emergency_type | int(11) | YES |  | NULL |  |  |
| er_pt_type | int(11) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_er_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "ipt_er_list_id": 2,
    "an": "540000893",
    "ward": "02",
    "send_datetime": "2011-11-01 11:36:31",
    "send_staff": "YUWA060",
    "receive_staff": null,
    "receive_datetime": null,
    "er_oper_status_id": null,
    "oper_list": "",
    "er_period": null,
    "er_emergency_type": null,
    "er_pt_type": null,
    "doctor": null,
    "hos_guid": null
  }
]
```
