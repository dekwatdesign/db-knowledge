# `age_id`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| age_id | int(11) | NO | PRI | 0 |  |  |
| age_name | varchar(250) | YES | MUL | NULL |  |  |
| year_min | int(11) | YES | MUL | NULL |  |  |
| year_max | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_age_name | age_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_year | year_min | no | 1 |
| ix_year | year_max | no | 2 |
| ix_year_index | year_max | no | 1 |
| ix_year_index | year_min | no | 2 |
| PRIMARY | age_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "age_id": 0,
    "age_name": null,
    "year_min": null,
    "year_max": null,
    "hos_guid": null
  },
  {
    "age_id": 1,
    "age_name": null,
    "year_min": null,
    "year_max": null,
    "hos_guid": null
  },
  {
    "age_id": 2,
    "age_name": null,
    "year_min": null,
    "year_max": null,
    "hos_guid": null
  },
  {
    "age_id": 3,
    "age_name": null,
    "year_min": null,
    "year_max": null,
    "hos_guid": null
  },
  {
    "age_id": 4,
    "age_name": null,
    "year_min": null,
    "year_max": null,
    "hos_guid": null
  },
  {
    "age_id": 5,
    "age_name": null,
    "year_min": null,
    "year_max": null,
    "hos_guid": null
  },
  {
    "age_id": 6,
    "age_name": null,
    "year_min": null,
    "year_max": null,
    "hos_guid": null
  },
  {
    "age_id": 7,
    "age_name": null,
    "year_min": null,
    "year_max": null,
    "hos_guid": null
  }
]
```
