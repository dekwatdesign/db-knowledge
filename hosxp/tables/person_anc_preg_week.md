# `person_anc_preg_week`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_anc_preg_week_id | int(11) | NO | PRI | 0 |  |  |
| week_min | int(11) | YES |  | NULL |  |  |
| week_max | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| week_min_quality | int(11) | YES |  | NULL |  |  |
| week_max_quality | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_anc_preg_week_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "person_anc_preg_week_id": 1,
    "week_min": 0,
    "week_max": 12,
    "hos_guid": null,
    "week_min_quality": 4,
    "week_max_quality": 12
  },
  {
    "person_anc_preg_week_id": 2,
    "week_min": 13,
    "week_max": 23,
    "hos_guid": null,
    "week_min_quality": 16,
    "week_max_quality": 20
  },
  {
    "person_anc_preg_week_id": 3,
    "week_min": 24,
    "week_max": 29,
    "hos_guid": null,
    "week_min_quality": 24,
    "week_max_quality": 28
  },
  {
    "person_anc_preg_week_id": 4,
    "week_min": 30,
    "week_max": 35,
    "hos_guid": null,
    "week_min_quality": 30,
    "week_max_quality": 34
  },
  {
    "person_anc_preg_week_id": 5,
    "week_min": 36,
    "week_max": 9999,
    "hos_guid": null,
    "week_min_quality": 36,
    "week_max_quality": 40
  }
]
```
