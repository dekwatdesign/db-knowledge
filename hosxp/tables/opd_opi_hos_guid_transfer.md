# `opd_opi_hos_guid_transfer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| vn | char(12) | YES | MUL | NULL |  |  |
| opd_opi_finance_transfer_list_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| opd_opi_fn_tr_list_id | int(11) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_opd_opi_finance_transfer_list_id | opd_opi_finance_transfer_list_id | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_tr | vn | no | 1 |
| ix_vn_tr | opd_opi_fn_tr_list_id | no | 2 |
| ix_vn_tr_index | opd_opi_fn_tr_list_id | no | 1 |
| ix_vn_tr_index | vn | no | 2 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hos_guid": "{000058F5-169D-4FF2-9A5A-C0D676F0D3DC}",
    "vn": "680310100002",
    "opd_opi_finance_transfer_list_id": null,
    "hos_guid_ext": null,
    "opd_opi_fn_tr_list_id": 8071,
    "opi_guid": "{000058F5-169D-4FF2-9A5A-C0D676F0D3DC}"
  },
  {
    "hos_guid": "{0000B242-3FDF-4AB5-9818-78B291DE7742}",
    "vn": "680207100000",
    "opd_opi_finance_transfer_list_id": null,
    "hos_guid_ext": null,
    "opd_opi_fn_tr_list_id": 6630,
    "opi_guid": "{0000B242-3FDF-4AB5-9818-78B291DE7742}"
  },
  {
    "hos_guid": "{0000D443-FAE9-4A92-9404-D316FF9BEEA8}",
    "vn": "680228130022",
    "opd_opi_finance_transfer_list_id": null,
    "hos_guid_ext": null,
    "opd_opi_fn_tr_list_id": 7690,
    "opi_guid": "{0000D443-FAE9-4A92-9404-D316FF9BEEA8}"
  },
  {
    "hos_guid": "{000163FF-18BD-453B-A3EA-EA2A4E214B01}",
    "vn": "671004093028",
    "opd_opi_finance_transfer_list_id": null,
    "hos_guid_ext": null,
    "opd_opi_fn_tr_list_id": 674,
    "opi_guid": "{000163FF-18BD-453B-A3EA-EA2A4E214B01}"
  },
  {
    "hos_guid": "{0001E26A-F801-4F30-AAE2-02C5D8329F3B}",
    "vn": "690105080209",
    "opd_opi_finance_transfer_list_id": null,
    "hos_guid_ext": null,
    "opd_opi_fn_tr_list_id": 24980,
    "opi_guid": "{0001E26A-F801-4F30-AAE2-02C5D8329F3B}"
  },
  {
    "hos_guid": "{000204E0-42E8-408E-8ECF-38A9FBB2548C}",
    "vn": "680204083016",
    "opd_opi_finance_transfer_list_id": null,
    "hos_guid_ext": null,
    "opd_opi_fn_tr_list_id": 6410,
    "opi_guid": "{000204E0-42E8-408E-8ECF-38A9FBB2548C}"
  },
  {
    "hos_guid": "{0002C7AF-752D-46C3-A42B-EECBBC75C713}",
    "vn": "681003103030",
    "opd_opi_finance_transfer_list_id": null,
    "hos_guid_ext": null,
    "opd_opi_fn_tr_list_id": 19668,
    "opi_guid": "{0002C7AF-752D-46C3-A42B-EECBBC75C713}"
  },
  {
    "hos_guid": "{0002E160-8254-41F0-A435-D1869F98A1AC}",
    "vn": "690525133009",
    "opd_opi_finance_transfer_list_id": null,
    "hos_guid_ext": null,
    "opd_opi_fn_tr_list_id": 34780,
    "opi_guid": "{0002E160-8254-41F0-A435-D1869F98A1AC}"
  }
]
```
