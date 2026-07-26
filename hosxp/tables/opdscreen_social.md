# `opdscreen_social`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| depress_problem | char(1) | YES |  | NULL |  |  |
| courier_problem | char(1) | YES |  | NULL |  |  |
| family_problem | char(1) | YES |  | NULL |  |  |
| other_problem | char(1) | YES |  | NULL |  |  |
| no_problem | char(1) | YES |  | NULL |  |  |
| unknown | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "vn": "541010083002",
    "depress_problem": "N",
    "courier_problem": "N",
    "family_problem": "N",
    "other_problem": "Y",
    "no_problem": "N",
    "unknown": "N",
    "hos_guid": null
  }
]
```
