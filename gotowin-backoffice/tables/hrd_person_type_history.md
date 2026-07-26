# `hrd_person_type_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int unsigned | NO | PRI | NULL | auto_increment |  |
| person_id | varchar(20) | NO | MUL | NULL |  | hrd_person.id |
| old_type_id | varchar(20) | YES |  | NULL |  |  |
| new_type_id | varchar(20) | NO |  | NULL |  |  |
| changed_at | datetime | NO | MUL | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| changed_by | varchar(20) | YES |  | NULL |  | users.id ที่เปลี่ยน |
| note | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_changed_at | changed_at | no | 1 |
| idx_person_id | person_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
