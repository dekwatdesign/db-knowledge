# `physic_pe_action_vas_test`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_action_vas_test_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_action_vas_test_name | varchar(250) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_action_vas_test_name | physic_pe_action_vas_test_name | no | 1 |
| PRIMARY | physic_pe_action_vas_test_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "physic_pe_action_vas_test_id": 1,
    "physic_pe_action_vas_test_name": "repeat extension in lying/REP EIL",
    "active_status": "Y"
  },
  {
    "physic_pe_action_vas_test_id": 2,
    "physic_pe_action_vas_test_name": "repeat flexion in lying/REP FIL",
    "active_status": "Y"
  },
  {
    "physic_pe_action_vas_test_id": 3,
    "physic_pe_action_vas_test_name": "repeat extension in standing/REP EIS",
    "active_status": "Y"
  },
  {
    "physic_pe_action_vas_test_id": 4,
    "physic_pe_action_vas_test_name": "repeat flexion in standing/REP FIS",
    "active_status": "Y"
  },
  {
    "physic_pe_action_vas_test_id": 5,
    "physic_pe_action_vas_test_name": "side glide in standing (right)/SGIS(R)",
    "active_status": "Y"
  },
  {
    "physic_pe_action_vas_test_id": 6,
    "physic_pe_action_vas_test_name": "side glide in standing (left)/SGIS(L)",
    "active_status": "Y"
  }
]
```
