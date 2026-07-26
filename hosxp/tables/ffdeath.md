# `ffdeath`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | YES | MUL | NULL |  |  |
| person_code | int(11) | YES | MUL | NULL |  |  |
| health_status | varchar(50) | YES |  | NULL |  |  |
| live_age | tinyint(4) | YES |  | NULL |  |  |
| death_age | tinyint(4) | YES |  | NULL |  |  |
| death_cause | varchar(250) | YES |  | NULL |  |  |
| illness | varchar(250) | YES |  | NULL |  |  |
| clinic_code | char(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| hn_person_code_unique | hn | yes | 1 |
| hn_person_code_unique | person_code | yes | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| person_code | person_code | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
