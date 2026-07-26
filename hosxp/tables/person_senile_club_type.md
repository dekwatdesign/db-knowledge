# `person_senile_club_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_senile_club_type_id | int(11) | NO | PRI | 0 |  |  |
| person_senile_club_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_senile_club_type_name | person_senile_club_type_name | yes | 1 |
| PRIMARY | person_senile_club_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "person_senile_club_type_id": 0,
    "person_senile_club_type_name": "ไม่ได้เป็น",
    "hos_guid": "{88542EE2-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_senile_club_type_id": 1,
    "person_senile_club_type_name": "ชมรมผู้สูงอายุ",
    "hos_guid": "{88543126-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_senile_club_type_id": 2,
    "person_senile_club_type_name": "คลังปัญญา",
    "hos_guid": "{8854322A-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_senile_club_type_id": 3,
    "person_senile_club_type_name": "ชมรมผู้สูงอายุและคลังปัญญา",
    "hos_guid": "{88543310-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_senile_club_type_id": 4,
    "person_senile_club_type_name": "อื่นๆ",
    "hos_guid": "{88543400-F61D-11DE-BFF4-00215E472B30}"
  }
]
```
