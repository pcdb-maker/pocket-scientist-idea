      </button>
      {response && (
        <div style={{ marginTop: '20px' }}>
          <h3>AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default WritingAssistant;
