# `person_village_duty`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_village_duty_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| person_duty_id | int(11) | YES | MUL | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| finish_date | date | YES |  | NULL |  |  |
| duty_active | char(1) | YES |  | NULL |  |  |
| duty_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_id | person_duty_id | no | 1 |
| ix_id_pid | person_id | no | 1 |
| ix_id_pid | person_duty_id | no | 2 |
| ix_id_pid_index | person_duty_id | no | 1 |
| ix_id_pid_index | person_id | no | 2 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_village_duty_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_village_duty_id": 1,
    "person_id": 37,
    "person_duty_id": 6,
    "start_date": "2004-10-01",
    "hos_guid": "{8D5275A2-F61D-11DE-BFF4-00215E472B30}",
    "finish_date": null,
    "duty_active": null,
    "duty_note": null
  },
  {
    "person_village_duty_id": 2,
    "person_id": 100,
    "person_duty_id": 6,
    "start_date": "2004-10-01",
    "hos_guid": "{8D5277C8-F61D-11DE-BFF4-00215E472B30}",
    "finish_date": null,
    "duty_active": null,
    "duty_note": null
  },
  {
    "person_village_duty_id": 3,
    "person_id": 104,
    "person_duty_id": 6,
    "start_date": "1994-10-01",
    "hos_guid": "{8D5278E0-F61D-11DE-BFF4-00215E472B30}",
    "finish_date": null,
    "duty_active": null,
    "duty_note": null
  },
  {
    "person_village_duty_id": 4,
    "person_id": 271,
    "person_duty_id": 6,
    "start_date": "2004-10-01",
    "hos_guid": "{8D5279E4-F61D-11DE-BFF4-00215E472B30}",
    "finish_date": null,
    "duty_active": null,
    "duty_note": null
  },
  {
    "person_village_duty_id": 5,
    "person_id": 338,
    "person_duty_id": 6,
    "start_date": "2001-10-01",
    "hos_guid": "{8D527AE8-F61D-11DE-BFF4-00215E472B30}",
    "finish_date": null,
    "duty_active": null,
    "duty_note": null
  },
  {
    "person_village_duty_id": 6,
    "person_id": 364,
    "person_duty_id": 6,
    "start_date": "2005-10-01",
    "hos_guid": "{8D527BE2-F61D-11DE-BFF4-00215E472B30}",
    "finish_date": null,
    "duty_active": null,
    "duty_note": null
  },
  {
    "person_village_duty_id": 7,
    "person_id": 426,
    "person_duty_id": 6,
    "start_date": "1990-10-01",
    "hos_guid": "{8D527CE6-F61D-11DE-BFF4-00215E472B30}",
    "finish_date": null,
    "duty_active": null,
    "duty_note": null
  },
  {
    "person_village_duty_id": 8,
    "person_id": 481,
    "person_duty_id": 6,
    "start_date": "2001-10-01",
    "hos_guid": "{8D527DE0-F61D-11DE-BFF4-00215E472B30}",
    "finish_date": null,
    "duty_active": null,
    "duty_note": null
  }
]
```
