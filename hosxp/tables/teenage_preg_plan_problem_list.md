# `teenage_preg_plan_problem_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_plan_problem_list_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_plan_problem_list_name | varchar(250) | YES |  | NULL |  |  |
| teenage_preg_plan_problem_list_child_type | char(1) | YES |  | NULL |  |  |
| teenage_preg_lookup_visit_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_plan_problem_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "teenage_preg_plan_problem_list_id": 13,
    "teenage_preg_plan_problem_list_name": "เยี่ยมหลังคลอดปกติ",
    "teenage_preg_plan_problem_list_child_type": "N",
    "teenage_preg_lookup_visit_type_id": 2,
    "hos_guid": null
  },
  {
    "teenage_preg_plan_problem_list_id": 14,
    "teenage_preg_plan_problem_list_name": "มารดามีภาวะตกเลือด",
    "teenage_preg_plan_problem_list_child_type": "N",
    "teenage_preg_lookup_visit_type_id": 2,
    "hos_guid": null
  },
  {
    "teenage_preg_plan_problem_list_id": 15,
    "teenage_preg_plan_problem_list_name": "มารดามีแผล Perineum ฉีกขาดลึก",
    "teenage_preg_plan_problem_list_child_type": "N",
    "teenage_preg_lookup_visit_type_id": 2,
    "hos_guid": null
  },
  {
    "teenage_preg_plan_problem_list_id": 16,
    "teenage_preg_plan_problem_list_name": "มารดามีภาวะพิษแห่งครรภ์ Eclampsia",
    "teenage_preg_plan_problem_list_child_type": "N",
    "teenage_preg_lookup_visit_type_id": 2,
    "hos_guid": null
  },
  {
    "teenage_preg_plan_problem_list_id": 17,
    "teenage_preg_plan_problem_list_name": "มารดาเป็นโรคเบาหวาน",
    "teenage_preg_plan_problem_list_child_type": "N",
    "teenage_preg_lookup_visit_type_id": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_plan_problem_list_id": 18,
    "teenage_preg_plan_problem_list_name": "มารดามีภาวะจิตเวช",
    "teenage_preg_plan_problem_list_child_type": "N",
    "teenage_preg_lookup_visit_type_id": 2,
    "hos_guid": null
  },
  {
    "teenage_preg_plan_problem_list_id": 19,
    "teenage_preg_plan_problem_list_name": "มารดาอายุน้อยกว่า 20 ปี",
    "teenage_preg_plan_problem_list_child_type": "N",
    "teenage_preg_lookup_visit_type_id": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_plan_problem_list_id": 20,
    "teenage_preg_plan_problem_list_name": "อื่นๆ",
    "teenage_preg_plan_problem_list_child_type": "N",
    "teenage_preg_lookup_visit_type_id": 1,
    "hos_guid": null
  }
]
```
