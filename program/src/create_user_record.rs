use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	Record,
};


/// To call once per account. Initialize a Record account. The total_balance of the account will be set to 0.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` user_record: [Record] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - user_name: [String] The username to be assigned to the Record.name property
/// - user_record_seed_signer: [Pubkey] Auto-generated, from input user_record of type [Record] set the seed named signer, required by the type
pub fn create_user_record(
	program_id: &Pubkey,
	user_record: &mut AccountPDA<Record>,
	user_name: String,
) -> ProgramResult {
    // Implement your business logic here...
    user_record.data.name = user_name;






    Ok(())
}