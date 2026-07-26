# `ffmember`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| communitypart | varchar(150) | YES |  | NULL |  |  |
| discharged | char(1) | YES |  | NULL |  |  |
| education | varchar(150) | YES |  | NULL |  |  |
| entrydate | datetime | YES |  | NULL |  |  |
| familyno | int(11) | YES | MUL | NULL |  |  |
| familyrelation | varchar(150) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| incomeperyear | int(11) | YES |  | NULL |  |  |
| orderno | int(11) | YES |  | NULL |  |  |
| specialtreat | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn_familyno_unique | hn | yes | 1 |
| hn_familyno_unique | familyno | yes | 2 |
| ix_hn_familyno_unique | familyno | yes | 1 |
| ix_hn_familyno_unique | hn | yes | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
