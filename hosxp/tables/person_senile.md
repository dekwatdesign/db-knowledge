# `person_senile`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_id | int(11) | NO | PRI | 0 |  |  |
| person_senile_helper_type_id | int(11) | YES |  | NULL |  |  |
| person_senile_self_type_id | int(11) | YES |  | NULL |  |  |
| person_senile_money_aid_type_id | int(11) | YES |  | NULL |  |  |
| person_senile_club_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
