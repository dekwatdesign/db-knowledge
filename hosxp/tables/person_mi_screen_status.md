# `person_mi_screen_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_mi_screen_status_id | int(11) | NO | PRI | 0 |  |  |
| person_mi_screen_status_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_mi_screen_status_name | person_mi_screen_status_name | yes | 1 |
| PRIMARY | person_mi_screen_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "person_mi_screen_status_id": 1,
    "person_mi_screen_status_name": "ไม่มีโอกาสเสี่ยง",
    "hos_guid": null
  },
  {
    "person_mi_screen_status_id": 2,
    "person_mi_screen_status_name": "สูง",
    "hos_guid": null
  },
  {
    "person_mi_screen_status_id": 3,
    "person_mi_screen_status_name": "สูงปานกลาง",
    "hos_guid": null
  },
  {
    "person_mi_screen_status_id": 4,
    "person_mi_screen_status_name": "สูงมาก",
    "hos_guid": null
  }
]
```
