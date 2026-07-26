# `dmht_foot_screen_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_foot_screen_result_id | int(11) | NO | PRI | 0 |  |  |
| dmht_foot_screen_result_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dmht_foot_screen_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dmht_foot_screen_result_id": 0,
    "dmht_foot_screen_result_name": "ไม่ได้ตรวจ",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_result_id": 1,
    "dmht_foot_screen_result_name": "Low Risk",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_result_id": 2,
    "dmht_foot_screen_result_name": "Moderrate Risk",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_result_id": 3,
    "dmht_foot_screen_result_name": "High Risk",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_result_id": 4,
    "dmht_foot_screen_result_name": "Very High Risk",
    "hos_guid": null
  }
]
```
