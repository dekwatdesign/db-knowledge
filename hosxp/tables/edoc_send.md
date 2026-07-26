# `edoc_send`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_send_id | int(11) | NO | PRI | 0 |  |  |
| edoc_send_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| edoc_send_date | date | YES | MUL | NULL |  |  |
| edoc_send_time | date | YES |  | NULL |  |  |
| edoc_send_type_id | int(11) | YES |  | NULL |  |  |
| edoc_send_to_emp_id | int(11) | YES | MUL | NULL |  |  |
| edoc_send_from_emp_id | int(11) | YES |  | NULL |  |  |
| edoc_send_staff | varchar(20) | YES |  | NULL |  |  |
| edoc_send_updatetime | datetime | YES |  | NULL |  |  |
| edoc_send_status_id | int(11) | YES |  | NULL |  |  |
| edoc_send_dep_id | int(11) | YES |  | NULL |  |  |
| edoc_id | int(11) | YES |  | NULL |  |  |
| edoc_send_note | text | YES |  | NULL |  |  |
| edoc_send_comment | text | YES |  | NULL |  |  |
| edoc_send_comment_secret | char(1) | YES |  | NULL |  |  |
| edoc_send_open_datetime | datetime | YES |  | NULL |  |  |
| edoc_send_note_id | int(11) | YES |  | NULL |  |  |
| edoc_send_mark | char(1) | YES |  | NULL |  |  |
| edoc_send_from_dep_id | int(11) | YES |  | NULL |  |  |
| edoc_send_comment_pic | blob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_emp_date | edoc_send_to_emp_id | no | 1 |
| ix_emp_date | edoc_send_date | no | 2 |
| ix_emp_date_index | edoc_send_date | no | 1 |
| ix_emp_date_index | edoc_send_to_emp_id | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_send_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "edoc_send_id": 1,
    "edoc_send_name": "ส่งจากงานสารบรรณ",
    "hos_guid": null,
    "edoc_send_date": null,
    "edoc_send_time": null,
    "edoc_send_type_id": null,
    "edoc_send_to_emp_id": null,
    "edoc_send_from_emp_id": null,
    "edoc_send_staff": null,
    "edoc_send_updatetime": null,
    "edoc_send_status_id": null,
    "edoc_send_dep_id": null,
    "edoc_id": null,
    "edoc_send_note": null,
    "edoc_send_comment": null,
    "edoc_send_comment_secret": null,
    "edoc_send_open_datetime": null,
    "edoc_send_note_id": null,
    "edoc_send_mark": null,
    "edoc_send_from_dep_id": null,
    "edoc_send_comment_pic": null
  },
  {
    "edoc_send_id": 2,
    "edoc_send_name": "ส่งจากแผนก",
    "hos_guid": null,
    "edoc_send_date": null,
    "edoc_send_time": null,
    "edoc_send_type_id": null,
    "edoc_send_to_emp_id": null,
    "edoc_send_from_emp_id": null,
    "edoc_send_staff": null,
    "edoc_send_updatetime": null,
    "edoc_send_status_id": null,
    "edoc_send_dep_id": null,
    "edoc_id": null,
    "edoc_send_note": null,
    "edoc_send_comment": null,
    "edoc_send_comment_secret": null,
    "edoc_send_open_datetime": null,
    "edoc_send_note_id": null,
    "edoc_send_mark": null,
    "edoc_send_from_dep_id": null,
    "edoc_send_comment_pic": null
  }
]
```
