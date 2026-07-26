# `person_senile_helper_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_senile_helper_type_id | int(11) | NO | PRI | 0 |  |  |
| person_senile_helper_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_senile_helper_type_name | person_senile_helper_type_name | yes | 1 |
| PRIMARY | person_senile_helper_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "person_senile_helper_type_id": 0,
    "person_senile_helper_type_name": "ไม่มี ถูกญาติทอดทิ้ง",
    "hos_guid": "{891C20A0-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_senile_helper_type_id": 1,
    "person_senile_helper_type_name": "ไม่มี อยู่ตามลำพัง ไม่มีญาติ",
    "hos_guid": "{891C22A8-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_senile_helper_type_id": 2,
    "person_senile_helper_type_name": "มี ครอบครัวดูแล",
    "hos_guid": "{891C23A2-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_senile_helper_type_id": 3,
    "person_senile_helper_type_name": "มี เพื่อนบ้านดูแล",
    "hos_guid": "{891C2492-F61D-11DE-BFF4-00215E472B30}"
  }
]
```
