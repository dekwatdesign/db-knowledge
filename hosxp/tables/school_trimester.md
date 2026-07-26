# `school_trimester`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| school_trimester_id | int(11) | NO | PRI | 0 |  |  |
| school_trimester_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_school_trimester_name | school_trimester_name | yes | 1 |
| PRIMARY | school_trimester_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "school_trimester_id": 1,
    "school_trimester_name": "เทอม 1",
    "hos_guid": null
  },
  {
    "school_trimester_id": 2,
    "school_trimester_name": "เทอม 2",
    "hos_guid": null
  }
]
```
